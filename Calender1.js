import React from "react";
import { Typography, Card, Row, Col } from "antd";
import { SPCalendar } from "./Components";

const { Title } = Typography;

export default function AcademicCalendar() {
  const handlePanelChange = (value, mode) => {
    console.log("Selected:", value.format("YYYY-MM-DD"), "Mode:", mode);
  };

  return (
    <Row>
      <Col span={24}>
       
          <SPCalendar onPanelChange={handlePanelChange} fullscreen={false} />
       
      </Col>
    </Row>
  );
}
