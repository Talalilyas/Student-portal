import React from "react";
import { Form, Button, Row, Col, Typography, Divider } from "antd";
import SPpersonalInfo from "./Components/Sppersonalinfo";
import { ResultInfo } from "./Components";

const { Title } = Typography;
export default function Resultcard() {
  const [form] = Form.useForm();
  const handleFormSubmit = (values) => {
    console.log("✅ Form Submitted:", values);
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", padding: "20px", backgroundColor: "white" }} >
      <Col  xs={24} sm={20} md={16} lg={12} xl={10}>
        <Title level={3} style={{ textAlign: "center" }}>
          Student Result Cards
        </Title>
        <Divider />
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          size="middle" >
          <SPpersonalInfo />
          <ResultInfo form={form} />
          <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
            <Button type="primary" htmlType="submit" block   >
              Submit Result
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
