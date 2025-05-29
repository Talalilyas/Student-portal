import React from "react";
import useFetchQuotes from "./Hookfetchdata";
import { Table, Row, Col, Typography } from "antd";

const { Title } = Typography;

export default function Coursedatatable() {
  const { data, loading } = useFetchQuotes("http://localhost:8080/score");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No users available.</p>;
  }

  const columns = [
    { title: "Course ID", dataIndex: "course_id", key: "course_id" },
    { title: "Course Title", dataIndex: "course_title", key: "course_title" },
    { title: "Awarded", dataIndex: "awarded", key: "awarded" },
    { title: "Credits", dataIndex: "Credits", key: "Credits" },
    { title: "Score", dataIndex: "score", key: "score" },
  ];

  return (
    <Row style={{ padding: 1 }}>
      <Col xs={24} sm={22} md={20} lg={18} xl={24}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 3 }}
          scroll={{ x: "max-content" }}
          size="small"
          bordered={false}
          rowClassName={() => "no-color-row"}
        />
      </Col>
    </Row>
  );
}
