
import React from "react";
import { Form } from "antd";
import SPInput from  "./SPInput"


const SPForminput = ({ label, name, rules, type = "text", value, onChange, placeholder }) => {
  return (
    <Form.Item
      label={<span style={{ color: "#fff" }}>{label}</span>}
      name={name}
      rules={rules}
    >
      <SPInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default SPForminput;
