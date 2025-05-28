import React from "react";
import useFetchQuotes from "./Hookfetchdata";
import Datatable from "./Datatable";

export default function Coursedatatable() {
  const { data, loading } = useFetchQuotes("http://localhost:8080/score");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <Datatable
      dataSource={data}
      columns={[
        { title: "Course ID", dataIndex: "course_id", key: "course_id" },
        {
          title: "Course Title",
          dataIndex: "course_title",
          key: "course_title",
        },
        { title: "Awarded", dataIndex: "awarded", key: "awarded" },
        { title: "Credits", dataIndex: "Credits", key: "Credits" },
        { title: "Score", dataIndex: "score", key: "score" },
      ]}
      pagination={{ pageSize: 5 }}
    />
  );
}
