import React from "react";
import { Row, Col  ,Flex,Spin,Alert} from "antd";
import { SPtable } from "./Components";
import useFetch from "./FetchHOOk/Hookfetchdata";

export default function Studentexam() {
  const { data, loading, error } = useFetch("http://localhost:8080/course");

if (!data || data.length === 0) return <p>No exam data available.</p>;
  const columns = [
    { title: "Course Title", dataIndex: "course_subject", key: "course_subject" },
    { title: "Exam Type", dataIndex: "exam_type", key: "exam_type" },
    { title: "Date/Time", dataIndex: "exam_date_time", key: "exam_date_time" },
  ];

  return (
    <Row style={{ padding: 10 }}>
      {loading ? (
        <Flex align="center" justify="center" style={{ padding: "50px" }}>
          <Spin tip="Loading modules..." />
        </Flex>
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : (
      <Col span={24}>
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
      )}
    </Row>
   
  );
}