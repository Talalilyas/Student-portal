import React from "react";
import { Table } from "antd";

const SPtable = (props) => {
  const {  data, columns,pagination } = props;
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
