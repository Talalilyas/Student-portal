import React from "react";
import { Input, Table } from "antd";

const SPtable = (props) => {
  const { ui, test, data, columns, pagination = { pageSize: 9 } } = props;
  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey="course_id"
      pagination={pagination}
      scroll={{ x: "max-content" }}
      size="middle"
      bordered
    />
  );
};

export default SPtable;
