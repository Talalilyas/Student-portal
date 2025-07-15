import React from "react";
import { Row, Col, Typography, Button, Spin } from "antd";
import useFetch from "./FetchHOOk/Hookfetchdata";

const { Title } = Typography;

export default function Studycard() {
  const { loading, data, error } = useFetch("http://localhost:8080/Studycard");

  if (loading) return <Spin tip="Loading cards..." />;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!Array.isArray(data) || data.length === 0)
    return <p>No cards available.</p>;



  return (
    <div>
      <Row gutter={[16, 16]} justify="start">
        {data.map(item => (
          <Col span={24} key={`${item.id}-${item.label}-${item.color}`}>
            <div
              style={{
             backgroundColor: item.color,
                borderRadius: "8px",
                padding: "19px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Title level={5} style={{ margin: 0 }}>
                  {item.label}
                </Title>
              </div>
              <Button type="primary" shape="round">
                Explore
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
