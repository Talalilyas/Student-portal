
import React from "react";
import { Input } from "antd";

const SPInput = ({ type = "text", ...props }) => {
  const Inputfield = type === "password" ? Input.Password : Input;
  return <Inputfield {...props} />;
};

export default SPInput;
