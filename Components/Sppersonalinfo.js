import React from "react";
import { Form, Input, Button, message } from "antd";

const SPpersonalInfo = () => {
  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok) {
        message.success("Data submitted successfully!");
        console.log(result);
      } else {
        message.error("Submission failed!");
      }
    } catch (error) {
      console.error(error);
      message.error("Error while submitting data.");
    }
  };

  return (
    <Form layout="vertical" name="personalInfoForm" onFinish={onFinish}>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please enter your first name!" }]}
      >
        <Input placeholder="Enter your first name" />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please enter your last name!" }]}
      >
        <Input placeholder="Enter your last name" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SPpersonalInfo;
