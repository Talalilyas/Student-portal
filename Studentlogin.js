import {
  Button,
  Input,
  Form,
  Row,
  Col,
  Image,
  Typography,
  Radio,
  Space,
  Tooltip,
  Card,
} from "antd";

export default function Studentlogin() {
  return (
     <Row justify={"center"} align={"middle"}  style={{ minHeight: "100vh" }}>
        <Col>
         <Card
          title="Login"
          bordered={false}
          style={{ maxWidth: 400, margin: "auto" }}
        >
    <Form
      name="loginForm"
      layout="vertical"
      //   onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      style={{ width: "100%", maxWidth: 350 }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please enter your username!" }]}
      >
        <Input
          //   prefix={<UserOutlined />}
          placeholder="Enter your username"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password
          //   prefix={<LockOutlined />}
          placeholder="Enter your password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col>
    </Row>
  );
}
