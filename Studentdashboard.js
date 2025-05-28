import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
UnorderedListOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Row, Col  ,Typography ,Divider} from "antd";
import Coursedatatable from "./Coursedatatable";

const { Header, Sider, Content } = Layout;

export default function Studentdasboard() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
 
     const {Text} = Typography ;
  return (
    <Row>
      <Layout>
        <Row style={{ minHeight: "100vh" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="md"
            onBreakpoint={(broken) => {
              setCollapsed(broken);
            }}
          >
           
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UnorderedListOutlined />,
                  label: "My Courses",
                  
                 
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />
          </Sider>
        </Row>
        <Layout>
          <Row>
            <Col lg={19} sm={19} md={19} style={{ paddingLeft: "15px" }}>
              <Header style={{ padding: 0, background: colorBgContainer }}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
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
          <Row>
            <Col lg={19} sm={20} md={19} style={{ paddingLeft: "14px" }}>
              <Content
                style={{
                  marginTop: "10px",
                  paddingLeft:"10px",
                  paddingTop:"10px",
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              ><UnorderedListOutlined style={{fontSize:"18px"}} />
               <Text type="secondary " style={{marginLeft:"10px"}}>      My Courses  </Text>
                <Divider size="medium" />
               <Coursedatatable/>
              </Content>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </Row>
  );
}
