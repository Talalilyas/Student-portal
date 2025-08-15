import React from "react";
import { Avatar, Space, Typography, Skeleton } from "antd";
import defaultImage from "../Images/images.jpg";

const { Text } = Typography;

const SidebarHeader = ({ collapsed, profile, loading }) => {

  return (
    <Space align="start" style={{ marginLeft: "8px", marginTop: "30px" }}>
      <Avatar
        shape="circle"
        src={defaultImage}
        style={{ width: "60px", height: "60px" }}
      />
      {!collapsed && (
        <Space
          direction="vertical"
          size={0}
          style={{ marginTop: "10px", marginLeft: "19px" }}
        >
          {loading ? (
            <Skeleton active paragraph={false} title={{ width: 100 }} />
          ) : (
            <>
              <Text strong>{profile.name || "Unknown Student"}</Text>
              <Space>
                <Text>Status:</Text>
                <Text style={{ color: "green" }}>
                  {profile?.status || "N/A"}
                </Text>
              </Space>
            </>)}
        </Space>
      )}
    </Space>
  );
};

export default SidebarHeader;
