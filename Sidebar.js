import React from "react";
import {
  ReadOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  LogoutOutlined,
  UserOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography, Divider, Space, Avatar, Card } from "antd";

import { useNavigate } from "react-router-dom";
import image from "./images.jpg";
import { useState } from "react";

const { Sider } = Layout;
const { Text } = Typography;

export default function Sidebar({ handleSignOut }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      width={280}
      collapsed={collapsed}
      style={{ background: "white" }}
      breakpoint="md"
      onBreakpoint={(broken) => setCollapsed(broken)}
    >
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

      <Divider size="medium" />

      <Menu mode="inline" theme="light">
        <Menu.Item
          key="grade"
          icon={<ReadOutlined />}
          onClick={() => navigate("coursecatalogue")}
          style={{ marginTop: "15px" }}
        >
          Course Catalogue
        </Menu.Item>
        <Menu.Item
          key="settings"
          icon={<AppstoreOutlined />}
          onClick={() => navigate("myprogress")}
          style={{ marginTop: "15px" }}
        >
          My Progress
        </Menu.Item>
        <Menu.Item
          key="calendar"
          icon={<CalendarOutlined />}
          onClick={() => navigate("academiccalendar")}
          style={{ marginTop: "15px" }}
        >
          Academic Calendar
        </Menu.Item>
        <Menu.Item
          key="result-form"
          icon={<ScheduleOutlined />}
          onClick={() => navigate("resultcard")}
          style={{ marginTop: "15px" }}
        >
          Results Card
        </Menu.Item>

        <Divider size="medium" />

        <Menu.Item
          key="study-card"
          icon={<UserOutlined />}
          onClick={handleSignOut}
          style={{ marginTop: "15px" }}
        >
          Study Card
        </Menu.Item>
        <Menu.Item
          key="recommendations"
          icon={<LikeOutlined />}
          onClick={handleSignOut}
          style={{ marginTop: "15px" }}
        >
          Recommendations
        </Menu.Item>
        <Menu.Item
          key="rating"
          icon={<StarOutlined />}
          onClick={handleSignOut}
          style={{ marginTop: "15px" }}
        >
          My Rating
        </Menu.Item>
        <Menu.Item
          key="signout"
          icon={<LogoutOutlined />}
          style={{ color: "red", marginTop: "15px" }}
          onClick={handleSignOut}
        >
          Sign Out
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
