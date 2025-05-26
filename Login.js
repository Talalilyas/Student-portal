import React from "react";
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

 
} from "antd";

import Icon, { GooglePlusOutlined } from "@ant-design/icons";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import bgImage from "./university-background-image.jpg"; // Your custom image
import { useState } from "react";
import Lecturer from "./Lecturer";
export default function Login() {
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  //   message.success("Login successful!");
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const { Title } = Typography;

  const [role, setRole] = useState("student");

  const handleChange = (e) => {
    setRole(e.target.value);
  };
  return (
    <Row style={{ minHeight: "100vh" }} justify="center">
      <Col xs={24} sm={18} md={12} lg={16} style={{ background: "purple" }}>
        <Image
          width="100%"
          height="98%"
          src={bgImage}
          preview={false}
          style={{ marginTop: "5px" }}
        />
      </Col>

      <Col
  xs={24}
  sm={18}
  md={12}
  lg={8}
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem",
    paddingTop:"170px"
  }}
>
  
  <Row justify="center" style={{ width: "100%" }}>
    <Col>
      <Image
        src={bgImage}
        preview={false}
        style={{ width: "150px", height: "auto" }} 
      />
    </Col>
     
  </Row>
   <Title style={{ fontFamily: "cursive", textAlign: "center" }}>
            Sgin in Uos
          </Title>
        {/* <Col> */}

        {/* <Button type="primary" shape="round" >
          Student 
          </Button>

       <Button type="white" shape="round" >
          Student 
          </Button> */}
        {/* </Col> */}

      <Lecturer/>
        <Row>
        <Col 
           
          style={{paddingTop:"5px"}}
         >
          <Button type="text" style={{ border: "1px solid", height: "60px" }}>
            <GooglePlusOutlined
              style={{ fontSize: "30px", color: "#08c" }}
              theme="outlined"
            />
            Contiune with the google
          </Button>
        </Col>
        </Row>

        {/* <Form
          name="loginForm"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: "100%", maxWidth: 350 }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your username"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form> */}
      </Col>
    </Row>
  );
}
