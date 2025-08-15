import React from "react";
import { Menu, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const SidebarMenuItem = ({ label, icon, path, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    else if (path) navigate(path);
  };

  return (
    <Row justify="space-around ">
      <Col span={18}>
        <Menu.Item key={path } icon={icon} onClick={handleClick}>
          {label}
        </Menu.Item>
      </Col>
    </Row>
  );
};

export default SidebarMenuItem;
