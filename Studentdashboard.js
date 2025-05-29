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
} from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Studentexam from "./Studentexam";
import Search from "./Search";
import { AudioOutlined ,ReadOutlined } from "@ant-design/icons";
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
       style={{background:"white"}}
      >
        <Menu mode="inline" theme="grey" style={{marginTop:"100px"}}>
          <Menu.Item
            key="courses"
            icon={<UnorderedListOutlined />}
            onClick={() => navigate("mycourse")}
          >
            My Courses
          </Menu.Item>
 
          <Menu.Item key="grade" icon={<ReadOutlined />} onClick={() => navigate("grade")}>
            Grade
          </Menu.Item>
          <Menu.Item key="settings" onClick={() => navigate("settings")}>
            Settings
          </Menu.Item>
          <Menu.Item key="quotes" onClick={() => navigate("quotes")}>
            Quotes
          </Menu.Item>
          <Menu.Item key="result-form" onClick={() => navigate("result-form")}>
            Student Result Form
          </Menu.Item>
          <Menu.Item key="signout">
            <Button
              type="link"
              onClick={handleSignOut}
              style={{ color: "#fff" }}
            >
              Sign Out
            </Button>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Row>
          <Col
            lg={18}
            sm={18}
            md={18}
            xl={18}
            style={{ paddingLeft: "16px", paddingTop: "10px" }}
          >
            <Header style={{ background: colorBgContainer, padding: "0 16px"  ,borderRadius: borderRadiusLG, }}>
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
                  <Search onSearch={onSearch} suffix={suffix}  />
                </Col>
              </Row>
            </Header>
          </Col>
        </Row>
        <Row style={{ paddingLeft: "16px", paddingTop: "20px" }}>
          <Col lg={18} md={18} sm={18} xl={18}>
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
                <Space></Space> <Space></Space> MY Courses
              </Text>
              <Divider size="small" />
              <Outlet />
            </Content>
          </Col>
        </Row>
        <Row style={{ paddingLeft: "16px", paddingTop: "20px" }}>
          <Col lg={18} sm={18} xl={18} md={18}>
            <Content
              style={{
                padding: "10px",
                paddingLeft: "10px",
                minHeight: 200,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <UnorderedListOutlined />
              <Text type="secondary ">
                {" "}
                <Space></Space>Upcoming exams
              </Text>
              <Divider size="small" />
              <Studentexam />
            </Content>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
}
