import { Row, Col, Card, Typography, Progress, Flex } from "antd";

const { Title, Text } = Typography;

export default function Myprogress() {
  const twoColors = {
    "0%": "#108ee9",
    "100%": "#87d068",
  };

  const conicColors = {
    "0%": "#87d068",
    "50%": "#ffe58f",
    "100%": "#ffccc7",
  };

  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={12}>
          <Card title="Overall Progress" bordered>
            <Progress percent={99.9} strokeColor={twoColors} />
            <Progress
              percent={50}
              status="active"
              strokeColor={{ from: "#108ee9", to: "#87d068" }}
              style={{ marginTop: "16px" }}
            />
          </Card>
        </Col>

        <Col xs={24} md={12} lg={12}>
          <Card title="Course Progress (Circle Type)">
            <Flex gap="large" wrap justify="center">
              <div style={{ textAlign: "center" }}>
                <Progress type="circle" percent={90} strokeColor={twoColors} />
                <Text>Course A</Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <Progress type="circle" percent={100} strokeColor={twoColors} />
                <Text>Course B</Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <Progress
                  type="circle"
                  percent={93}
                  strokeColor={conicColors}
                />
                <Text>Course C</Text>
              </div>
            </Flex>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
        <Col xs={24}>
          <Card title="Course Progress (Dashboard Type)">
            <Flex gap="large" wrap justify="center">
              <div style={{ textAlign: "center" }}>
                <Progress
                  type="dashboard"
                  percent={90}
                  strokeColor={twoColors}
                />
                <Text>Module A</Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <Progress
                  type="dashboard"
                  percent={100}
                  strokeColor={twoColors}
                />
                <Text>Module B</Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <Progress
                  type="dashboard"
                  percent={93}
                  strokeColor={conicColors}
                />
                <Text>Module C</Text>
              </div>
            </Flex>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
