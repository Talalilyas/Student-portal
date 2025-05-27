import { Row, Col, Image, Typography } from "antd";
import bgimage from "./university-background-image.jpg";

import { Form, Input, Button, Card } from "antd";

export default function Lecturerlogin() {
  const { Title } = Typography;

  return (
    <>
      <Row justify="center" style={{ width: "100%" }}>
        <Col>
          <Image
            src={bgimage}
            preview={false}
            style={{ width: "150px", height: "auto" }}
          />
        </Col>
      </Row>

      <Row justify="center">
        {" "}
        <Col>
          <Title style={{ fontFamily: "cursive", textAlign: "center" }}>
            Teacher perfoming portal login
          </Title>
        </Col>{" "}
      </Row>

      <Row justify="center" align="middle">
        <Card
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            width: "100%",
            maxWidth: 350,
          }}
        >
          <Form name="loginForm" layout="vertical" style={{ width: "100%" }}>
            <Form.Item
              label={<span style={{ color: "#fff" }}>Teacher UserID</span>}
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input placeholder="Enter Your  user id  " />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "#fff" }}>Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </>
  );
}
