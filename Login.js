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

       
      </Col>
    </Row>
  );
}
