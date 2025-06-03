import React from "react";
import { Row, Col, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, AudioOutlined } from "@ant-design/icons";
import Search from "./Search";

export default function HeaderBar({ collapsed, setCollapsed }) {
  const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1677ff" }} />;
  const onSearch = (value) => console.log("Search value:", value);

  return (
    <Row align="middle" justify="space-between">
      <Col xs={4} sm={4} md={2} lg={1}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: "18px" }}
        />
      </Col>
      <Col xs={20} sm={20} md={22} lg={23}>
        <Search onSearch={onSearch} suffix={suffix} />
      </Col>
    </Row>
  );
}
