

import { Row, Col, Card, Typography, Progress, Flex, Spin, Alert } from "antd";
import useFetch from "./FetchHOOk/Hookfetchdata";

const { Text } = Typography;

export default function Myprogress() {
  const { loading, data, error } = useFetch("http://localhost:8080/myprogress");
  
  const twoColors = {
    "0%": "#108ee9",
    "100%": "#87d068",
  };
  
  const conicColors = {
    "0%": "#87d068",
    "50%": "#ffe58f",
    "100%": "#ffccc7",
  };

  const renderProgress = (type) => {
    // Add null check here
    if (!data || !Array.isArray(data)) {
      return <Text>No progress data available</Text>;
    }
    
    return data.map((item, index) => (
      <div key={index} style={{ textAlign: "center" }}>
        <Progress
          type={item.type || type} // Use item.type if available, fallback to parameter
          percent={item.percent}
          strokeColor={item.percent >= 95 ? conicColors : twoColors}
        />
        <Text>{item.name}</Text>
      </div>
    ));
  };

  if (loading) {
    return (
      <Spin
        tip="Loading Progress..."
        style={{ display: "block", marginTop: 100 }}
      />
    );
  }

  if (error) {
    return (
      <Alert
        message="Error loading data"
        description={error}
        type="error"
      />
    );
  }

  // Add additional check before rendering the main content
  if (!data) {
    return (
      <Alert
        message="No Data"
        description="No progress data available"
        type="info"
      />
    );
  }

  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={12}>
          <Card title="Course Progress (Circle Type)">
            <Flex gap="large" wrap justify="center">
              {renderProgress("circle")}
            </Flex>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
        <Col xs={24}>
          <Card title="Course Progress (Dashboard Type)">
            <Flex gap="large" wrap justify="center">
              {renderProgress("dashboard")} {/* Changed to dashboard type */}
            </Flex>
          </Card>
        </Col>
      </Row>
    </div>
  );
}