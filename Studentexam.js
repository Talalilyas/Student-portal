import React from "react";
import useFetchQuotes from "./Hookfetchdata";
import { Table, Row, Col, Typography } from "antd";

const { Title } = Typography;

export default function Studentexam() {
  const { data, loading } = useFetchQuotes("http://localhost:8080/course");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No users available.</p>;
  }

  const columns = [
    { title: "Course title", dataIndex: "course_subject", key: "course_id" },
    { title: "Exam type", dataIndex: "exam_type", key: "course_title" },
    { title: "Date/Time", dataIndex: "exam_date_time", key: "awarded" },
   
  ];

  return (
    <Row style={{ padding: 1 }}>
      <Col xs={24} sm={22} md={20} lg={18} xl={24}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 4 }}
          scroll={{ x: "max-content" }}
          size="small"
          bordered={false}
          rowClassName={() => "no-color-row"}
        />
      </Col>
    </Row>
  );
}
