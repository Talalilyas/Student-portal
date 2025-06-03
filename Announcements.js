import React from "react";
import { Content } from "antd/es/layout/layout";
import { Typography, Divider, Row, Col, Card } from "antd";

const { Text } = Typography;

export default function Announcements() {
  return (
    <Content style={{  background: "#fff"}}>

      <Text style={{ fontFamily: "sans-serif", fontSize: "22px" ,paddingLeft:"19px"}}>
        Announcements
      </Text>
      <Row >
        <Col span={24}>
          <Card variant="borderless" style={{ height: "100px",width:"285px" }}>
        Midterm exams start next week. Check your schedule now.
          </Card>
           <Card variant="borderless" style={{ height: "100px",width:"285px" }}>
      New courses available for Fall 2025 registration. Enroll soon.
          </Card>
           <Card variant="borderless" style={{ height: "100px",width:"285px" }}>
     Graduation form deadline approaching. Submit documents by June 25.
          </Card>
        </Col>
      </Row>
    </Content>
  );
}
