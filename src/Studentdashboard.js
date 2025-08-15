import React, { useState } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Row, Col, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Sidebar from "./Sidebar";
import { SPsearch } from "./Components";

const { Header, Content } = Layout;

export default function Studentdashboard() {
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  console.log(isLogin);
  const onSearch = (value) => {
    console.log("Search value:", value);
  };
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
              }}>
              <Row>
                <Col>
                  <Button
                    type="text"
                    icon={<MenuUnfoldOutlined />}
                    style={{ fontSize: "18px" }}
                  />
                </Col>
                <Col flex="auto">
                  <SPsearch onSearch={onSearch} />
                </Col>
              </Row>
            </Header>
          </Col>
        </Row>
        <Content style={{ padding: "16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
