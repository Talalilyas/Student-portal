import React from "react";
import { Row, Col } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import DashboardCardSection from "./Components/DashboardCardSection";
import CourseTable from "./CourseTable";
import Studentexam from "./Studentexam";
import useFetch from "./FetchHOOk/Hookfetchdata";
import { SPCalendar, SPtable } from "./Components";

export default function DashboardOverview() {
  const {
    data: announcements,
    loading,
    error,
  } = useFetch("http://localhost:8080/SPAnoucments");

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Announcement",
      dataIndex: "announcement_text",
      key: "announcement_text",
    },
  ];

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
          >
            <SPCalendar/>
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
          <DashboardCardSection
            icon={<UnorderedListOutlined />}
            title="Announcements"
          >
            {loading ? (
              <p>Loading announcements...</p>
            ) : error ? (
              <p style={{ color: "red" }}>Error: {error}</p>
            ) : (
              <SPtable
                data={announcements}
                columns={columns}
                scroll={{ x: "max-content" }}
                pagination={{ pageSize: 6 }}
                size="small"
                bordered
              />
            )}
          </DashboardCardSection>
        </Col>
      </Row>
    </>
  );
}
