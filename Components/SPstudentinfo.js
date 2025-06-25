import { Space, Avatar, Text } from "antd";
import image from "../Images/images.jpg";

export default function Spstudent() {
  return (
    <Space align="start" style={{ marginLeft: "8px", marginTop: "30px" }}>
      <Avatar
        shape="circle"
        src={image}
        style={{ width: "60px", height: "60px" }}
      />

      <Space
        direction="vertical"
        size={0}
        style={{ marginTop: "10px", marginLeft: "19px" }}
      >
        <Text strong>Student 1</Text>
        <Space>
          <Text>Status:</Text>
          <Text style={{ color: "green" }}>Active</Text>
        </Space>
      </Space>
    </Space>
  );
}
