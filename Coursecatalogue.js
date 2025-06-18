import React from "react";
import useFetchQuotes from "./Hookfetchdata";
import { Row, Col, Typography, Card } from "antd";
import { SPtable } from "./Components";

const { Title } = Typography;

export default function Coursecatalogue() {
  const { data, loading } = useFetchQuotes("http://localhost:8080/score");

  if (loading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>No courses available.</p>;

  const columns = [
    { title: "Course ID", dataIndex: "course_id", key: "course_id" },
    { title: "Course Title", dataIndex: "course_title", key: "course_title" },
    { title: "Awarded", dataIndex: "awarded", key: "awarded" },
    { title: "Credits", dataIndex: "Credits", key: "Credits" },
    { title: "Score", dataIndex: "score", key: "score" },
  ];

  return (
    <Row>
      <Col span={24}>
        <Card
          title={<Title level={5} style={{ marginBottom: 0 }}>Course Catalogue</Title>}
          bordered={false}
          style={{ borderRadius: "10px", boxShadow: "0 2px 8px #f0f1f2" }}
        >
          <SPtable data={data} columns={columns} pagination={{ pageSize: 9 }}/>
        </Card>
      </Col>
    </Row>
  );
}
