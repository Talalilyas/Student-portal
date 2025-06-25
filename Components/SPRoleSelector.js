import React from "react";
import { Row, Col, Radio } from "antd";
import { Link } from "react-router-dom";

const RoleSelector = ({ role, onChange, studentPath = "/studentlogin", lecturerPath = "/Lecturerlogin" }) => {
  return (
    <Row justify="center">
      <Col xs={24} style={{ display: "flex", justifyContent: "center" }}>
        <Radio.Group
          onChange={onChange}
          value={role}
          buttonStyle="solid"
          className="role-selector-group"
        >
          <Link to={studentPath}>
            <Radio.Button
              value="student"
              className="role-selector-button role-left"
            >
              Student
            </Radio.Button>
          </Link>
          <Link to={lecturerPath}>
            <Radio.Button
              value="lecturer"
              className="role-selector-button role-right"
            >
              Lecturer
            </Radio.Button>
          </Link>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default RoleSelector;
