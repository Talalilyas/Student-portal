import React from "react";
import { Typography, Row, Col } from "antd";

const { Title } = Typography;

const SPTitle = (props) => {
  const { item, text } = props;
  return (
    <Row justify="center">
      <Col>
        <Title style={{ fontFamily: "cursive" }}>{text}</Title>
      </Col>
      <Col>
        <Title style={{ fontFamily: "fantasy" }}>{item}</Title>
      </Col>
    </Row>
  );
};
export default SPTitle;
