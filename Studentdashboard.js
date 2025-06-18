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
  Typography,
  Divider,
  Row,
  Col,
  theme,
  Card,
} from "antd";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Sidebar from "./Sidebar";
import Calender from "./Calender1";
import Studentexam from "./Studentexam";
import Search from "./Search";
import WelcomeDashboard from "./WelcomeDashboard";
import Myprogress from "./Myprogress"; // ✅ Import MyProgress
import Resultcard from "./Resultcard";

const { Header, Content } = Layout;
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

  // Routing-based flags
  const isWelcomePage = currentPath === "/studentdashboard";
  const isAcademicCalendarPage = currentPath === "/studentdashboard/academiccalendar";
  const isMyCoursePage = currentPath === "/studentdashboard/mycourse";
  const isMyProgressPage = currentPath === "/studentdashboard/myprogress"; // ✅ New condition
const isResultcard = currentPath === "/studentdashboard/resultcard";


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
      <Sidebar handleSignOut={handleSignOut} />

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
            {isWelcomePage ? (
              <Content
                style={{
                  padding: "10px",
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <WelcomeDashboard />
              </Content>
            ) : isAcademicCalendarPage ? (
              <Content
                style={{
                  padding: "10px",
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Calender />
              </Content>
            ) : isMyProgressPage ? ( // ✅ My Progress rendering
              <Content
                style={{
                  padding: "10px",
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Myprogress />
              </Content>
            ) : isResultcard ? (


             <Content
  style={{
    padding: "10px",
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  }}
>
  <Resultcard />
</Content>
            ): isMyCoursePage ? (
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
            ) : (
              <>
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

                  <Col lg={7} sm={24} xl={7} md={7}>
                    <Content
                      style={{
                        padding: "10px",
                        background: colorBgContainer,
                      }}
                    >
                      <Divider size="large" />
                      <Text
                        style={{ fontFamily: "sans-serif", fontSize: "22px" }}
                      >
                        Announcements
                      </Text>
                      <Row gutter={16}>
                        <Col span={24}>
                          <Card variant="borderless" style={{ height: "70px" }}>
                            Midterm exams start next week. Check your schedule now.
                          </Card>
                        </Col>
                        <Col span={24}>
                          <Card variant="borderless" style={{ height: "70px" }}>
                            New courses available for Fall 2025. Enroll soon.
                          </Card>
                        </Col>
                        <Col span={24}>
                          <Card variant="borderless" style={{ height: "70px" }}>
                            Graduation form deadline is June 25. Submit early.
                          </Card>
                        </Col>
                      </Row>
                    </Content>
                  </Col>
                </Row>
              </>
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
