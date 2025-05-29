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
  Space
} from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export default function Studentdashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

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
      >
        <Menu mode="inline" theme="dark" >
          <Menu.Item key="courses" icon={<UnorderedListOutlined />} onClick={() => navigate("table")}>
            My Courses
          </Menu.Item>
          <Menu.Item key="grade" onClick={() => navigate("grade")}>
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
            <Button type="link" onClick={handleSignOut} style={{ color: "#fff" }}>
              Sign Out
            </Button>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout> 
             <Row>
      <Col lg={18} sm={18} md={18} xl={18} style={{ paddingLeft: "16px" }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
       </Col>
     </Row>  
        <Row style={{ paddingLeft: "16px",paddingTop:"10px" }}>
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
                    <Space></Space> <Space></Space>  MY Courses
              </Text>
              <Divider size="small" />
              <Outlet />
            </Content>
          </Col>
        </Row>
        <Row style={{ paddingLeft:"16px",paddingTop:"10px" }}>
          <Col lg={18} sm={18} xl={18} md={18}>
            <Content
              style={{
                padding: "10px",
                minHeight: 200,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}>
             <UnorderedListOutlined/> 
              <Text type="secondary "> <Space></Space>Upcoming exams</Text>
              <Divider size="small" /> 
            </Content>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
}
