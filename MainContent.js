import React from "react";
import { Layout, Row, Col, Typography, Divider } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import Studentexam from "./Studentexam";
import CalendarCard from "./CalendarCard";
import Announcements from "./Announcements";

const { Content } = Layout;
const { Text } = Typography;

export default function MainContent() {
  return (
    <Content style={{ padding: "16px", background: "#f5f5f5" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={17}>
          <Content style={{ padding: "10px", background: "#fff", borderRadius: "12px" }}>
            <UnorderedListOutlined />
            <Text type="secondary" style={{ marginLeft: "5px" }}>
              MY Courses
            </Text>
            <Divider size="small" />
            <Outlet />
          </Content>
        </Col>
        <Col xs={24} lg={7}>
          <CalendarCard />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={17} style={{ paddingTop: "5px" }}>
          <Content style={{ padding: "10px", background: "#fff", borderRadius: "12px" }}>
            <UnorderedListOutlined />
            <Text type="secondary" style={{ marginLeft: "5px" }}>
              Upcoming Exams
            </Text>
            <Divider size="small" />
            <Studentexam />
          </Content>
        </Col>
        <Col lg={7} sm={24}>
          <Announcements />
        </Col>
      </Row>
    </Content>
  );
}
