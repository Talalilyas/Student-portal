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


  const renderProgress = (type) =>
    data
      ?.filter((item) => item.type === type)
      .map((item, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <Progress
            type={item.type}
            percent={item.percent}
            strokeC olor={item.percent >= 95 ? conicColors : twoColors}
          />
          <Text>{item.name}</Text>
        </div>
      ));

  if (loading) {
    return <Spin tip="Loading Progress..." style={{ display: "block", marginTop: 100 }} />;
  }

  if (error) {
    return <Alert message="Error loading data" description={error.message} type="error" />;
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
              {renderProgress("circle")}
            </Flex>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
