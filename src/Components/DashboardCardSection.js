import React from "react";
import { Card, Divider, Typography, Space } from "antd";

const { Text } = Typography;

export default function DashboardCardSection({ icon, title, children, style }) {
  return (
    <Card style={{ ...style, height: "100%", overflow: "auto" }}>
      <Space align="center" style={{ marginBottom: 8 }}>
        {icon}
        <Text type="secondary" strong>
          {title}
        </Text>
      </Space>
      <Divider style={{ margin: "8px 0" }} />
      {children}
    </Card>
  );
}
