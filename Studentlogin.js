import { Row, Col, Image, Typography, message } from "antd";
import bgimage from "./university-background-image.jpg";
import useLocalStorageState from "use-local-storage-state";
import { Form, Input, Button, Card } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Studentlogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const [users, setUser] = useLocalStorageState("user", { username: "" });
  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", "");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const loginData = {
      username: username,
      password: password,
      expiresInMins: 30,
    };

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.message || "Invalid credentials");
      }

      const data = await response.json();
      message.success("Login successful!");
      setAccessToken(data);
      setUser({ username });
      setIsLogin(true);
      console.log(users)
      navigate("/Studentdashboard");
    } catch (err) {
      message.error(`Error: ${err.message}`);
    }
  };

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
        <Col>
          <Title style={{ fontFamily: "cursive", textAlign: "center" }}>
            Student Performing Portal Login
          </Title>
        </Col>
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
          <Form name="loginForm" layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label={<span style={{ color: "#fff" }}>Student ID</span>}
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your ID"
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "#fff" }}>Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
      </Row>
    </>
  );
}
