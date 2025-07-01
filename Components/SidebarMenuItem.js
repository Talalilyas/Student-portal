// components/SidebarMenuItem.js
import React from "react";
import { Menu, Row, Col } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarMenuItem = ({ label, icon, path, onClick, danger = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = path && location.pathname.includes(path);

  const handleClick = () => {
    if (onClick) onClick();
    else if (path) navigate(path);
  };

  return (
    <Row justify="space-around ">
      <Col span={18}>
        <Menu.Item
          key={path || label}
          icon={icon}
          onClick={handleClick}
          style={{}}
        >
          {label}
        </Menu.Item>
      </Col>
    </Row>
  );
};

export default SidebarMenuItem;
