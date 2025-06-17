import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  AudioOutlined,

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
  Card,
} from "antd";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import image from "./images.jpg";
import Studentexam from "./Studentexam";
import Search from "./Search";
import Calender from "./Calender";
import Sidebar from "./Sidebar";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export default function Studentdashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1677ff" }} />;

  const handleSignOut = () => {
    setIsLogin(false);
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar/>

      <Layout>
        <Row wrap={false}>
          <Col flex="auto" style={{ paddingLeft: "16px", paddingTop: "7px" }}>
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
        </Row>

        <Layout>
          <Content style={{ padding: "16px", background: "#f5f5f5" }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={17}>
                <Content
                  style={{
                    padding: "10px",
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <UnorderedListOutlined />
                  <Text type="secondary" style={{ marginLeft: "5px" }}>
                    MY Courses
                  </Text>
                  <Divider size="small" />
                  <Outlet />
                </Content>
              </Col>

             
            
                <Col xs={24} lg={7}>
                  <Content
                    style={{
                      padding: "10px",
                      background: colorBgContainer,
                  
                    }}
                  >
                    <UnorderedListOutlined />
                    <Text type="secondary" style={{ marginLeft: "5px" }}>
                      Academic Calendar
                    </Text>
                    <Divider size="small" />
                    <Calender />
                  </Content>
              </Col>
     
            </Row>

           
    
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={17} style={{ paddingTop: "5px" }}>
                  <Content
                    style={{
                      padding: "10px",
                      background: colorBgContainer,
                      borderRadius: borderRadiusLG,
                    }}
                  >
                    <UnorderedListOutlined />
                    <Text type="secondary" style={{ marginLeft: "5px" }}>
                      Upcoming Exams
                    </Text>
                    <Divider size="small" />
                    <Studentexam />
                  </Content>
                </Col>

                <Col lg={7} sm={24}>
                  <Content
                    style={{
                      padding: "10px",
                      background: colorBgContainer,
                  
                    }}
                  >
                    <Divider size="large" />
                    <Text style={{ fontFamily: "sans-serif", fontSize: "22px" }}>
                      Announcements
                    </Text>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Card variant="borderless" style={{ height: "100px" }}>
                          Midterm exams start next week. Check your schedule now.
                        </Card>
                      </Col>
                      <Col span={24}>
                        <Card variant="borderless" style={{ height: "100px" }}>
                          New courses available for Fall 2025. Enroll soon.
                        </Card>
                      </Col>
                      <Col span={24}>
                        <Card variant="borderless" style={{ height: "100px" }}>
                          Graduation form deadline is June 25. Submit early.
                        </Card>
                      </Col>
                    </Row>
                  </Content>
                </Col>
              </Row>
    
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}