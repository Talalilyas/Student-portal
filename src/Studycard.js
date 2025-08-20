import React, { useState } from "react";
import { Row, Col, Spin, Alert, Flex } from "antd";
import useFetch from "./FetchHOOk/Hookfetchdata";
import SPTitle from "./Components/SpTitle";
import SPButton from "./Components/SPButton";

export default function Studycard() {
  const { loading, data, error } = useFetch("http://localhost:8080/Studycard");

  const  [click ,setclick]  = useState()


  function handleclick ( ) {
   console.log( click,"user trying to explore")
     
  }

  return (
    <div>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SPTitle level={2} style={{ margin: 0 }} text="Study Card" />
      </div>
      {loading ? (
        <Flex align="center" justify="center" style={{ padding: "50px" }}>
          <Spin tip="Loading modules..." />
        </Flex>
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : (
        <Row gutter={[16, 16]}>
          {data.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <div
                style={{
                  backgroundColor: item.color || "#1890ff",
                  borderRadius: "8px",
                  padding: "16px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <SPTitle item={item.label}>{item.label}</SPTitle>
                <SPButton type={"primary"} Shape={"round"} name={"Explore"}  onclick= {handleclick}>
                  Explore
                </SPButton>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
