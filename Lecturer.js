import React from "react";
import { useState } from "react";

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

import { Link } from 'react-router-dom';
export default function Lecturer() {
  const [role, setRole] = useState("student");

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <Row   justify="center">
    <Col xs="24"  justify="center">
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
        <Link   to="./studentlogin" >
        <Radio.Button
          value="student"
          style={{
            borderRadius: "999px 0 0 999px",
            width: 120,
            textAlign: "center",
          }}
        >
          Student
        </Radio.Button>
        </Link>
        <Link to="./Lecturerlogin"> 
        <Radio.Button
          value="lecturer"
          style={{
            borderRadius: "0 999px 999px 0",

            maxWidth: "100%",

            textAlign: "center",
          }}
        >
          Lecturer
        </Radio.Button>
        </Link>
      </Radio.Group>
    </Col>
    </Row>
  );
}
