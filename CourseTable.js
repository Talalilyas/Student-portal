// CourseTable.js
import React from "react";
import useFetch from "./FetchHOOk/Hookfetchdata";
import { Row, Col, Typography, Card } from "antd";
import { SPtable } from "./Components";

const { Title } = Typography;

export default function CourseTable({
  apiUrl = "http://localhost:8080/score",
  title = null,
  pagination = { pageSize: 5 },
  useCard = false,
}) {
  const { data, loading } = useFetch(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>No data available.</p>;

  const columns = [
    { title: "Course ID", dataIndex: "course_id", key: "course_id" },
    { title: "Course Title", dataIndex: "course_title", key: "course_title" },
    { title: "Awarded", dataIndex: "awarded", key: "awarded" },
    { title: "Credits", dataIndex: "Credits", key: "Credits" },
    { title: "Score", dataIndex: "score", key: "score" },
  ];

  const tableContent = (
    <SPtable data={data} columns={columns} pagination={pagination} />
  );

  return (
    <Row style={{ padding: 10 }}>
      <Col span={24}>
        {useCard ? (
          <Card
            title={
              title ? (
                <Title level={5} style={{ marginBottom: 0 }}>
                  {title}
                </Title>
              ) : null
            }
            bordered={false}
            style={{ borderRadius: "10px", boxShadow: "0 2px 8px #f0f1f2" }}
          >
            {tableContent}
          </Card>
        ) : (
          tableContent
        )}
      </Col>
    </Row>
  );
}
