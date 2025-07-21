import React from "react";
import { Row, Col, Typography, Button, Spin } from "antd";
import useFetch from "./FetchHOOk/Hookfetchdata";

const { Title } = Typography;

export default function Studycard() {
  
  const { loading, data, error, fetchData } = useFetch("http://localhost:8080/Studycard", );


  
  const handleLoadData = () => {
    fetchData();
  };

  if (loading) return <Spin tip="Loading cards..." />;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Title level={3}>Study Cards</Title>
        <Button type="primary" onClick={handleLoadData}>
          Load Study Cards
        </Button>
      </div>
    );
  }

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>No cards available.</p>
        <Button type="primary" onClick={handleLoadData}>
          Retry Loading
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Title level={2} style={{ margin: 0 }}>Study Cards</Title>
        <Button onClick={handleLoadData} loading={loading}>
          Refresh
        </Button>
      </div>
      
      <Row gutter={[16, 16]} justify="start">
        {data.map(item => (
          <Col span={24} key={item.id}>
            <div
              style={{
                backgroundColor: item.color,
                borderRadius: "8px",
                padding: "19px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <Title level={5} style={{ margin: 0, color: "#fff" }}>
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