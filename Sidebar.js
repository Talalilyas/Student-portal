import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  ReadOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  LogoutOutlined,
  UserOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Menu, Space, Avatar, Divider, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import image from "./images.jpg";

const { Sider } = Layout;
const { Text } = Typography;

export default function Sidebar({ collapsed, setCollapsed, handleSignOut }) {
  const navigate = useNavigate();

  return (
    <Sider
      width={250}
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="md"
      onBreakpoint={(broken) => setCollapsed(broken)}
      style={{ background: "white" }}
    >
      <Space align="start" style={{ marginLeft: "8px", marginTop: "30px" }}>
        <Avatar shape="circle" src={image} style={{ width: "60px", height: "60px" }} />
        {!collapsed && (
          <Space direction="vertical" size={0} style={{ marginTop: "10px", marginLeft: "19px" }}>
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
        <Menu.Item key="courses" icon={<UnorderedListOutlined />} onClick={() => navigate("mycourse")}>
          My Courses
        </Menu.Item>
        <Menu.Item key="grade" icon={<ReadOutlined />} onClick={() => navigate("grade")}>
          Course Catalogue
        </Menu.Item>
        <Menu.Item key="settings" icon={<AppstoreOutlined />} onClick={() => navigate("settings")}>
          My Progress
        </Menu.Item>
        <Menu.Item key="calendar" icon={<CalendarOutlined />} onClick={() => navigate("quotes")}>
          Academic Calendar
        </Menu.Item>
        <Menu.Item key="result-form" icon={<ScheduleOutlined />} onClick={() => navigate("result-form")}>
          My Results
        </Menu.Item>

        <Divider size="medium" />

        <Menu.Item key="study-card" icon={<UserOutlined />} onClick={handleSignOut}>
          Study Card
        </Menu.Item>
        <Menu.Item key="recommendations" icon={<LikeOutlined />} onClick={handleSignOut}>
          Recommendations
        </Menu.Item>
        <Menu.Item key="rating" icon={<StarOutlined />} onClick={handleSignOut}>
          My Rating
        </Menu.Item>
        <Menu.Item key="signout" icon={<LogoutOutlined />} style={{ color: "red" }} onClick={handleSignOut}>
          Sign Out
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
