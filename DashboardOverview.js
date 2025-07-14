import React from "react";
import { Row, Col, Typography, Table } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import DashboardCardSection from "./Components/DashboardCardSection";
import CourseTable from "./CourseTable";
import AcademicCalendar from "./Components/SPcalender";
import Studentexam from "./Studentexam";
import useFetch from "./FetchHOOk/Hookfetchdata";
import { SPtable } from "./Components";

const { Text } = Typography;

export default function DashboardOverview() {
  const {
    data: announcements,
    loading,
    error,
  } = useFetch("http://localhost:8080/SPAnoucments");
console.log("Announcements data:", announcements);


  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      width: 60,
    },
    {
      title: "Announcement",
      dataIndex: "announcement_text",
      key: "announcement_text",
    },
  ];


  const formattedData = announcements?.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

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

        <Col xs={24} lg={7} hi >
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
                  data={formattedData}
              columns={columns}
              pagination={{ pageSize: 5 }}
              size="small"
              bordered
              scroll={{ y: 180 }}
              />
            )}
          </DashboardCardSection>
        </Col>
      </Row>
    </>
  );
}
