
import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SPsearch({ onSearch }) {
  return (
  
     <Input
      placeholder="What are you looking for?"
      onPressEnter={onSearch} 
      suffix={<SearchOutlined style={{ color: "#aaa" }} />}
      style={{
        width: "100%",
        maxWidth:150,
        marginTop: "2px",
       
      }}
    />
  );
}
