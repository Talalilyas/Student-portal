import React from "react";
import { Row, Col, Typography, Card } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import DashboardCardSection from "./Components/DashboardCardSection";
import CourseTable from "./CourseTable";
import AcademicCalendar from "./Components/SPcalender";
import Studentexam from "./Studentexam";

const { Text } = Typography;

const announcements = [
  "Midterm exams start next week.",
  "New courses for Fall 2025.",
  "Graduation form deadline: June 25.",
];

export default function DashboardOverview() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={17}>
          <DashboardCardSection
            icon={<UnorderedListOutlined />}
            title="My Courses"
          >
            <CourseTable />
          </DashboardCardSection>
        </Col>
        <Col xs={24} lg={7}>
          <DashboardCardSection
            icon={<UnorderedListOutlined />}
            title="Academic Calendar"
            style={{ marginLeft: 8 }}
          >
            <AcademicCalendar />
          </DashboardCardSection>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={17}>
          <DashboardCardSection
            icon={<UnorderedListOutlined />}
            title="Upcoming Exams"
          >
            <Studentexam />
          </DashboardCardSection>
        </Col>
        <Col xs={24} lg={7}>
          <Card style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 22 }}>Announcements</Text>
            <Row gutter={[8, 8]}>
              {announcements.map((item, index) => (
                <Col span={24} key={index}>
                  <Card variant="borderless" style={{ height: 80 }}>
                    {item}
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
