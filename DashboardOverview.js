import React from "react";
import { Row, Col, Divider, Typography, Card, Calendar } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import Studentexam from "./Studentexam";

import AcademicCalendar from "./Components/SPcalender";
import CourseTable from "./CourseTable";

const { Text } = Typography;

export default function DashboardOverview() {
  return (
    <>
      <Row>
        <Col xs={24} lg={17} md={7}>
          <Card>
            <UnorderedListOutlined />
            <Text type="secondary" style={{ marginLeft: "5px" }}>
              MY Courses
            </Text>
            <Divider />
            <CourseTable />
          </Card>
        </Col>
        <Col xs={24} lg={7} md={7}>
          <Card style={{ marginLeft: "8px" }}>
            <UnorderedListOutlined />
            <Text type="secondary" style={{ marginLeft: "5px" }}>
              Academic Calendar
            </Text>
            <Divider size="medium" />
            <AcademicCalendar />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={24} lg={17}>
          <Card>
            <UnorderedListOutlined />
            <Text type="secondary" style={{ marginLeft: "5px" }}>
              Upcoming Exams
            </Text>
            <Divider />
            <Studentexam />
          </Card>
        </Col>
        <Col xs={24} lg={7}>
          <Card style={{ marginLeft: "8px" }}>
            <Divider size="large" />
            <Text style={{ fontSize: "22px" }}>Announcements</Text>
            <Row gutter={16}>
              <Col span={24}>
                <Card variant="borderless" style={{ height: "80px" }}>
                  Midterm exams start next week.
                </Card>
              </Col>
              <Col span={24}>
                <Card variant="borderless" style={{ height: "80px" }}>
                  New courses for Fall 2025.
                </Card>
              </Col>
              <Col span={24}>
                <Card variant="borderless" style={{ height: "80px" }}>
                  Graduation form deadline: June 25.
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
