import React from "react";
import { Form, Button } from "antd";
import SPInput from "./SPinput";

const SPButton = ({
 
}) => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" block>
        Login
      </Button>
    </Form.Item>
  );
};

export default SPButton;
