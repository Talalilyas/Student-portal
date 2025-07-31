import React from "react";
import { Card, Row, Col, Typography, Badge } from "antd";
import useFetch from "./FetchHOOk/Hookfetchdata"; 
import  SPCalendar  from "./Components/SPcalender";
const { Title } = Typography;


export default function Academiccalender() {
  const { data: events, loading, error } = useFetch("http://localhost:8080/Calenderevents");

  const dateCellRender = (value) => {
    if (!Array.isArray(events)) return null;

    const currentDate = value.format("YYYY-MM-DD");
    const listData = events.filter((event) => event.date === currentDate);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  if (loading) return <p>Loading calendar...</p>;
  if (error) return <p style={{ color: "red" }}>Error loading calendar: {error}</p>;

  return (
    <div>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card title={<Title level={4}>Academic Calendar</Title>} bordered={false}>
            <SPCalendar
              fullscreen
              dateCellRender={dateCellRender}
              style={{ background: "#fff" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
