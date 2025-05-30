import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  Typography,
  Divider,
  Row,
  Col,
  theme,
  Space,
  Avatar,
} from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import image from "./images.jpg";
import Studentexam from "./Studentexam";
import Search from "./Search";
import {
  AudioOutlined,
  ReadOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  LogoutOutlined,
  UserOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Calender from "./Calender";
const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export default function Studentdashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const onSearch = (value) => {
    console.log("Search value:", value);
  };
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const handleSignOut = () => {
    setIsLogin(false);
    console.log(isLogin);
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={240}
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onBreakpoint={(broken) => setCollapsed(broken)}
        style={{ background: "white" }}
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

        <Menu mode="inline" theme="grey">
          <Menu.Item
            key="courses"
            icon={<UnorderedListOutlined />}
            onClick={() => navigate("mycourse")}
            style={{ paddingTop: "10px", marginTop: "15px" }}
          >
            My Courses
          </Menu.Item>

          <Menu.Item
            key="grade"
            icon={<ReadOutlined />}
            onClick={() => navigate("grade")}
            style={{ paddingTop: "10px", marginTop: "15px" }}
          >
            Course Catalouge
          </Menu.Item>
          <Menu.Item
            key="settings"
            icon={<AppstoreOutlined />}
            onClick={() => navigate("settings")}
            style={{ paddingTop: "10px", marginTop: "20px" }}
          >
            My progress
          </Menu.Item>
          <Menu.Item
            key="quotes"
            icon={<CalendarOutlined />}
            onClick={() => navigate("quotes")}
            style={{ paddingTop: "10px", marginTop: "20px" }}
          >
            Acdemic Calender
          </Menu.Item>
          <Menu.Item
            key="result-form"
            icon={<ScheduleOutlined />}
            onClick={() => navigate("result-form")}
            style={{ paddingTop: "10px", marginTop: "20px" }}
          >
            My progress
          </Menu.Item>
          <Divider size="medium" />

          <Menu.Item
            key="signout"
            type="link"
            onClick={handleSignOut}
            style={{ paddingTop: "10px", marginTop: "20px" }}
            icon={<UserOutlined />}
          >
            Study Card
          </Menu.Item>
          <Menu.Item
            key="signout"
            type="link"
            onClick={handleSignOut}
            style={{ paddingTop: "10px", marginTop: "20px" }}
            icon={<LikeOutlined />}
          >
            Recommendations
          </Menu.Item>
          <Menu.Item
            key="signout"
            type="link"
            onClick={handleSignOut}
            style={{ paddingTop: "10px", marginTop: "20px" }}
            icon={<StarOutlined />}
          >
            My rating
          </Menu.Item>
          <Menu.Item
            key="signout"
            type="link"
            onClick={handleSignOut}
            style={{ color: "red", paddingTop: "10px", marginTop: "20px" }}
            icon={<LogoutOutlined />}
          >
            Sign Out
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Row wrap={false}>
          <Col flex="auto" style={{ paddingLeft: "16px", paddingTop: "10px" }}>
            <Header
              style={{
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Row align="middle" justify="space-between">
                <Col xs={4} sm={4} md={2} lg={1}>
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    style={{ fontSize: "18px" }}
                  />
                </Col>

                <Col xs={20} sm={20} md={22} lg={23}>
                  <Search onSearch={onSearch} suffix={suffix} />
                </Col>
              </Row>
            </Header>
          </Col>

          <Col flex="300px" style={{ paddingLeft: "10px" }}>
            <Content
              style={{
                height: "80px",
                background: colorBgContainer,
                marginLeft: "11px",
              }}
            />
          </Col>
        </Row>

        <Layout>
          <Content style={{ padding: "16px", background: "#f5f5f5" }}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Content
                  style={{
                    padding: "10px",
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <UnorderedListOutlined style={{ fontSize: "16px" }} />
                  <Text type="secondary" style={{ marginLeft: "2px" }}>
                    MY Courses
                  </Text>
                  <Divider size="small" />
                  <Outlet />
                </Content>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
              <Col span={24}>
                <Content
                  style={{
                    padding: "10px",
                    minHeight: 200,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <UnorderedListOutlined />
                  <Text type="secondary"> Upcoming Exams</Text>
                  <Divider size="small" />
                  <Studentexam />
                </Content>
              </Col>
            </Row>
          </Content>
 <Sider
      width={260}
      breakpoint="sm" // collapses at small screens
      collapsedWidth="0"
      style={{
        background: "#fff",
        borderLeft: "1px solid #f0f0f0",
        padding: "16px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "100%", width: "100%" }}>
        <Calender />
      </div>
    </Sider>
        </Layout>
      </Layout>
    </Layout>
  );
}
