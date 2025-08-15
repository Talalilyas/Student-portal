import React from "react";
import { Row, Col, Typography, Card, Flex, Spin, Alert } from "antd";
import { SPtable } from "./Components";
import useFetch from "./FetchHOOk/Hookfetchdata";

const { Title } = Typography;

export default function CourseTable({
  apiUrl = "http://localhost:8080/score",
  title = "Your Courses",
  pagination = { pageSize: 6 },
  useCard = false,
}) {
  const { data, loading, error } = useFetch(apiUrl);

  if (!data || !Array.isArray(data) || data.length === 0)
    return <p>No data available.</p>;

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
      {loading ? (
        <Flex align="center" justify="center" style={{ padding: "50px" }}>
          <Spin tip="Loading modules..." />
        </Flex>
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : (
        <Col span={24}>
          {useCard ? (
            <Card title={title ? <Title level={5}>{title}</Title> : null}>
              {tableContent}
            </Card>
          ) : (
            tableContent
          )}
        </Col>
      )}
    </Row>
  );
}
