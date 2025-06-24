import { Row, Col, Typography, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

import { Form, Input, Card, Button } from "antd";
import SPInput from "./Components/SPinput";

import SPFormInput from "./Components/SPFrominput";
import SpTitle from "./Components/SpTitle";
import SPButton from "./Components/SPButton";
import SPlogoheader from "./Components/SPlogoheader";
import SPTitle from "./Components/SpTitle";

export default function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const [users, setUser] = useLocalStorageState("user", { username: "" });
  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", "");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const loginData = {
      username,
      password,
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
      setAccessToken(data.token);
      setUser({ username });
      setIsLogin(true);
      navigate("/studentdashboard");
    } catch (err) {
      message.error(`Login failed: ${err.message}`);
    }
  };

  return (
    <>
      <SPlogoheader />
      <SPTitle text={"Student perfoming portal login"} />
      <Row justify="center">
        <Col span={6}>
          <Card
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <Form name="loginForm" layout="vertical" onFinish={handleSubmit}>
              <SPFormInput
                label="Student ID"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your ID"
                rules={[
                  { required: true, message: "Please enter your username!" },
                ]}
              />
              <SPFormInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              />
              <SPButton />
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
