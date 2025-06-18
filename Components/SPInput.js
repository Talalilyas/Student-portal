import React from "react";
import { Input } from "antd";

const SPInput = (props) => {
  const { ui, test } = props;
  return <Input {...ui} />;
};

export default SPInput;
