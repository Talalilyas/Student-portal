import React from "react";
import { Content } from "antd/es/layout/layout";
import { Typography, Divider } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import Calender from "./Calender";

const { Text } = Typography;

export default function CalendarCard() {
  return (
    <Content style={{ padding: "10px", background: "#fff", borderRadius: "12px" }}>
      <UnorderedListOutlined />
      <Text type="secondary" style={{ marginLeft: "5px" }}>
        Academic Calendar
      </Text>
      <Divider size="small" />
      <Calender />
    </Content>
  );
}
