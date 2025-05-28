import { Table } from "antd";

export default function Datatable({ dataSource, columns, pagination }) {
  return <Table dataSource={dataSource} columns={columns} pagination={pagination} rowKey="course_id" />;
}
