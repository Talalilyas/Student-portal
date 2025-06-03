import React from "react";
import { Content } from "antd/es/layout/layout";
import { Typography, Divider, Row, Col, Card } from "antd";

const { Text } = Typography;

export default function Announcements() {
  return (
    <Content style={{ padding: "10px", background: "#fff", borderRadius: "12px" }}>
      <Divider size="large" />
      <Text style={{ fontFamily: "sans-serif", fontSize: "22px" }}>
        Announcements
      </Text>
      <Row gutter={16}>
        <Col span={24}>
          <Card variant="borderless" style={{ height: "100px" }}>
            Card content
          </Card>
        </Col>
      </Row>
    </Content>
  );
}
