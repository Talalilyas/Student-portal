import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { Button, Layout, Typography, Row, Col, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Sidebar from "./Sidebar";
import Search from "./Search";
import SPInput from "./Components/SPInput";
const { Header, Content } = Layout;
const { Text } = Typography;

export default function Studentdashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
              <Row>
                <Col>
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    style={{ fontSize: "18px" }}
                  />
                </Col>
                <Col flex="auto">
                  <Search onSearch={onSearch} suffix={suffix} />
                </Col>
              </Row>
            </Header>
          </Col>
        </Row>
        <Content style={{ padding: "16px", background: "#f5f5f5" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
