// components/SidebarHeader.js
import React from "react";
import { Avatar, Space, Typography } from "antd";
import image from "../Images/images.jpg";

const { Text } = Typography;

const SidebarHeader = ({ collapsed }) => (
  <Space align="start" style={{ marginLeft: "8px", marginTop: "30px" }}>
    <Avatar
      shape="circle"
      src={image}
      style={{ width: "60px", height: "60px" }}
    />
    {!collapsed && (
      <Space
        direction="vertical"
        size={0}
        style={{ marginTop: "10px", marginLeft: "19px" }}
      >
        <Text strong>Student 1</Text>
        <Space>
          <Text>Status:</Text>
          <Text style={{ color: "green" }}>Active</Text>
        </Space>
      </Space>
    )}
  </Space>
);

export default SidebarHeader;
