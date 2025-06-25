// components/Sidebar.js
import React, { useState } from "react";
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
import { Layout, Menu, Divider } from "antd";
import SPHeader from "./Components/SPHeader";
import SidebarMenuItem from "./Components/SidebarMenuItem";

const { Sider } = Layout;

export default function Sidebar({ handleSignOut }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      width={280}
      collapsed={collapsed}
      style={{ background: "white" }}
      breakpoint="md"
      onBreakpoint={(broken) => setCollapsed(broken)}
    >
      <SPHeader collapsed={collapsed} />
      <Divider size="medium" />

      <Menu mode="inline" theme="light" selectedKeys={[]}>
        <SidebarMenuItem
          icon={<ReadOutlined />}
          label="Course Catalogue"
          path="coursecatalogue"
        />
        <SidebarMenuItem
          icon={<AppstoreOutlined />}
          label="My Progress"
          path="myprogress"
        />
        <SidebarMenuItem
          icon={<CalendarOutlined />}
          label="Academic Calendar"
          path="academiccalendar"
        />
        <SidebarMenuItem
          icon={<ScheduleOutlined />}
          label="Results Card"
          path="resultcard"
        />

        <Divider size="medium" />

        <SidebarMenuItem
          icon={<UserOutlined />}
          label="Study Card"
          path="studycard"
        />
        <SidebarMenuItem
          icon={<LikeOutlined />}
          label="Recommendations"
          onClick={handleSignOut}
        />
        <SidebarMenuItem
          icon={<StarOutlined />}
          label="My Rating"
          onClick={handleSignOut}
        />
        <SidebarMenuItem
          icon={<LogoutOutlined />}
          label="Sign Out"
          onClick={handleSignOut}
          danger
        />
      </Menu>
    </Sider>
  );
}
