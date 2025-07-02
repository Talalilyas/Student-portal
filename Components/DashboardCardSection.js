import React from "react";
import { Card, Divider, Typography } from "antd";

const { Text } = Typography;

export default function   DashboardCardSection({ icon, title, children, style }) {
  return (
    <Card style={style}>
      {icon}
      <Text type="secondary" style={{ marginLeft: 5 }}>
        {title}
      </Text>
      <Divider />
      {children}
    </Card>
  );
}
