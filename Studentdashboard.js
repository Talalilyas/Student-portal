import React, { useState } from "react";
import { Layout, Row, Col, theme } from "antd";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

import Sidebar from "./Sidebar";
import HeaderBar from "./Headerpage";
import MainContent from "./MainContent";

const { Header, Content } = Layout;

export default function StudentDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsLogin(false);
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} handleSignOut={handleSignOut} />
      <Layout>
        <Row wrap={false}>
          <Col flex="auto" style={{ paddingLeft: "16px", paddingTop: "10px" }}>
            <Header style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
              <HeaderBar collapsed={collapsed} setCollapsed={setCollapsed} />
            </Header>
          </Col>
        </Row>
        <Layout>
          <MainContent />
        </Layout>
      </Layout>
    </Layout>
  );
}
