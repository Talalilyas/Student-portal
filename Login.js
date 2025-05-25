import React from "react";
import {
  Button,
  Input,
  Form,
  Row,
  Col,
  Image,
  message,
  Typography,
  Radio,
  Space,
  Tooltip,
  Flex,
  

} from "antd";
import Icon, { GooglePlusOutlined } from '@ant-design/icons';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import bgImage from "./university-background-image.jpg"; // Your custom image
import { useState } from "react";
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
          height="95%"
          src={bgImage}
          preview={false}
          style={{ marginTop: "10px" }}
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
          padding: "2rem",
        }}
      >
     <Col span="15" >
     
        <Image
          width="40%"
          // height="30%"
          src={bgImage}
          preview={false}
       
        />
        <Title style={{ fontFamily: "cursive",textAlign:"center" }}>Sgin in Uos</Title>
   </Col>
        {/* <Col> */}

        {/* <Button type="primary" shape="round" >
          Student 
          </Button>

       <Button type="white" shape="round" >
          Student 
          </Button> */}
        {/* </Col> */}
        <Col xs={{ flex: '100%' }}
          sm={{ flex: '50%' }}
          md={{ flex: '40%' }}
          lg={{ flex: '20%' }}
          xl={{ flex: '10%' }}>
        <Radio.Group
          onChange={handleChange}
          value={role}
          buttonStyle="solid"
          style={{
            border: "1px solid  black",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <Radio.Button
            value="student"
            style={{
              borderRadius: "999px 0 0 999px",
          
              textAlign: "center",
            }}
          >
            Student
          </Radio.Button>
          <Radio.Button
            value="lecturer"
            style={{
              borderRadius: "0 999px 999px 0",
             maxWidth:"100%",
              textAlign: "center",
            }}
          >
            Lecturer
          </Radio.Button>
        </Radio.Group>
        </Col>
        <Flex vertical gap="small" style={{  marginTop: "25px" }}>
          <Button
            type="text"
            style={{ border: "1px solid", height: "70px" }}
           
  
          >
             <GooglePlusOutlined  style={{ fontSize: '35px', color: '#08c' }} theme="outlined"/>
            Contiune with the google
                     
          </Button>
        </Flex>

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
