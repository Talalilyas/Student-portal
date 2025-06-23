
import useFetch from "./FetchHOOk/Hookfetchdata";
import {Row, Col, } from "antd";
import { SPtable } from "./Components";



export default function Studentexam() {
  const { data, loading } = useFetch("http://localhost:8080/course");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No users available.</p>;
  }

  const columns = [
    { title: "Course title", dataIndex: "course_subject", key: "course_id" },
    { title: "Exam type", dataIndex: "exam_type", key: "course_title" },
    { title: "Date/Time", dataIndex: "exam_date_time", key: "awarded" },
   
  ];

  return (
    <Row style={{ padding: 1 }}>
      <Col xs={24} sm={22} md={20} lg={18} xl={24}>
        <SPtable
          data={data}
          columns={columns}
          pagination={{ pageSize: 4 }}
          scroll={{ x: "max-content" }}
          size="small"
          bordered={false}
          rowClassName={() => "no-color-row"}
        />
      </Col>
    </Row>
  );
}
