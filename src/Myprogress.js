import { Row, Col, Card, Typography, Progress, Flex, Spin, Alert } from "antd";
import useFetch from "./FetchHOOk/Hookfetchdata";

const { Text } = Typography;

export default function Myprogress() {
  const { loading, data, error } = useFetch("http://localhost:8080/myprogress");

  const twoColors = { "0%": "#108ee9", "100%": "#87d068" };
  const conicColors = { "0%": "#87d068", "50%": "#ffe58f", "100%": "#ffccc7" };
  if (!data || data.length === 0) {
    return (
      <Alert
        message="No Progress Data Found"
        description="The server returned no data to display."
        type="info"
        showIcon
      />
    );
  }

  return (
    <div style={{ padding: "24px" }}>
      <Row justify="center">
        <Col xs={24} md={18} lg={20}>
          <Card title="Module Progress">
            {loading ? (
              <Flex align="center" justify="center" style={{ padding: "50px" }}>
                <Spin tip="Loading modules..." />
              </Flex>
            ) : error ? (
              <Alert
                message="Error"
                description={error}
                type="error"
                showIcon
              />
            ) : (
              <Flex gap="large" wrap justify="center">
                {data
                  .filter((item) => item.type === "circle")
                  .map((item) => (
                    <div key={item.id} style={{ textAlign: "center" }}>
                      <Progress
                        type="circle"
                        percent={item.percent}
                        strokeColor={
                          item.percent >= 95 ? conicColors : twoColors
                        }
                      />
                      <Text style={{ display: "block", marginTop: 8 }}>
                        {item.name}
                      </Text>
                    </div>
                  ))}
              </Flex>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
