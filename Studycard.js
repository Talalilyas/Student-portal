import React from "react";
import { Row, Col, Typography, Button, } from "antd";

const { Title, } = Typography;
const subjects = [
  {
    title: "Geography",
    color: "#fbeaea",
  },
  {
    title: "History",
    color: "#fff9db",
  },
  {
    title: "Biology",
    chapters: 25,
    topics: 40,
    color: "#e8f7e4",
  },
  {
    title: "Music",
    color: "#f0e9ff",
  },
  {
    title: "Music",
    color: "#f0e9ff",
  },
];

export default function Studycard() {
  return (
    <div>
      <Row gutter={[2, 9]} justify="start">
        {subjects.map((subject, index) => (
          <Col span={24} key={index}>
            <div
              style={{
                backgroundColor: subject.color,
                borderRadius: "8px",
                padding: "19px",
                display: "flex",
                justifyContent: "space-between",
              }}>
              <div>
                <Title level={5} style={{ margin: 0 }}>
                  {subject.title}
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
