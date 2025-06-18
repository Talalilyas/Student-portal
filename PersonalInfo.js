import React from "react";
import { Form, Input } from "antd";

const PersonalInfo = () => {
  return (
    <>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please enter your first name!" }]} >
        <Input placeholder="Enter your first name" />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please enter your last name!" }]}>
        <Input placeholder="Enter your last name" />
      </Form.Item>
    </>
  );
};
export default PersonalInfo;
