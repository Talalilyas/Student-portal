import React from "react";
import { Card, Calendar, Row, Col, Typography, Badge } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;

const getListData = (value) => {
  let listData = [];


  switch (value.date()) {
    case 5:
      listData = [
        { type: 'success', content: 'Midterm Exams Start' },
        { type: 'warning', content: 'Submit Assignments' },
      ];
      break;
    case 12:
      listData = [
        { type: 'error', content: 'Project Presentation' },
      ];
      break;
    case 25:
      listData = [
        { type: 'success', content: 'Final Exams Start' },
      ];
      break;
    default:
      listData = [];
  }

  return listData || [];
};

const dateCellRender = (value) => {
  const listData = getListData(value);
  return (
    <ul className="events" style={{ paddingLeft: 0 }}>
      {listData.map((item, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
};

export default function Academiccalender() {
  return (
    <div >
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card title={<Title level={4}>Academic Calendar</Title>} bordered={true}>
            <Calendar
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
