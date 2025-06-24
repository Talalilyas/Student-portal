import React from "react";
import { Typography, Row, Col } from "antd";

const { Title } = Typography;

const SPTitle = ({ text }) => (
  <Row justify="center">
    <Col>
      <Title style={{ fontFamily: "cursive" }}>
        {text}
      </Title>
    </Col>
  </Row>
);

export default SPTitle;
