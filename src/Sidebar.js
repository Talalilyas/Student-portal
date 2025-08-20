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
import { Layout, Menu, Divider, Alert, Flex, Spin } from "antd";
import { useLocation } from "react-router-dom";
import useFetch from "./FetchHOOk/Hookfetchdata";
import SPHeader from "./Components/SPHeader";
import SidebarMenuItem from "./Components/SidebarMenuItem";

const { Sider } = Layout;

const iconMap = {
  "Course Catalogue": <ReadOutlined />,
  "My Progress": <AppstoreOutlined />,
  "Academic Calendar": <CalendarOutlined />,
  "Results Card": <ScheduleOutlined />,
  "Study Card": <UserOutlined />,
  Recommendations: <LikeOutlined />,
  "My Rating": <StarOutlined />,
  "Sign Out": <LogoutOutlined />,
};

export default function Sidebar({ handleSignOut }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { loading, data, error } = useFetch("http://localhost:8080/Label");
  const { data: profileData, loading: profileLoading } = useFetch(
    "http://localhost:8080/userprofile"
  );
  const profile = profileData?.[0] || profileData;

  if (loading) return <p>Loading sidebar...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  const mainItems = [
    "Course Catalogue",
    "My Progress",
    "Academic Calendar",
    "Results Card",
  ];
  const extraItems = ["Study Card", "Recommendations", "My Rating"];
  const actionItems = ["Sign Out"];

  const currentPath = location.pathname.split("/").pop()?.toLowerCase();
  const selectedKey =
    data.find((item) => item.path?.toLowerCase() === currentPath)?.id + "";

  return (

    
    <Sider
      width={280}
      collapsed={collapsed}
      style={{ background: "white" }}
      breakpoint="md"
      onBreakpoint={(broken) => setCollapsed(broken)}
    >
      <SPHeader
        collapsed={collapsed}
        profile={profile}
        loading={profileLoading}
      />
      <Divider style={{ margin: "16px 0" }} />
      {loading ? (
        <Flex align="center" justify="center" style={{ padding: "50px" }}>
          <Spin tip="Loading modules..." />
        </Flex>
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />         
      ) : (
        <Menu
          mode="inline"
          theme="light"
          style={{ padding: "0 16px" }}
          selectedKeys={[selectedKey]}
        >
          {data
            .filter((item) => mainItems.includes(item.label))
            .map(({ id, label, path }) => (
              <SidebarMenuItem
                key={id}
                label={label}
                icon={iconMap[label] || <ReadOutlined />}
                path={`/studentdashboard/${path}`}
              />
            ))}

          <Divider style={{ margin: "16px 0" }} />
          {data
            .filter((item) => extraItems.includes(item.label))
            .map(({ id, label, path }) => (
              <SidebarMenuItem
                key={id}
                label={label}
                icon={iconMap[label] || <ReadOutlined />}
                path={`/studentdashboard/${path}`}
              />
            ))}

          <Divider style={{ margin: "16px 0" }} />

          {data
            .filter((item) => actionItems.includes(item.label))
            .map(({ id, label }) => (
              <SidebarMenuItem
                key={id}
                label={label}
                icon={iconMap[label] || <ReadOutlined />}
                onClick={handleSignOut}
              />
            ))}
        </Menu>
      )}
    </Sider>
  );
}
