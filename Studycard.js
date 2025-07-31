import React from "react";
import { Row, Col, Spin} from "antd";
import useFetch from "./FetchHOOk/Hookfetchdata";
import SPTitle from "./Components/SpTitle";
import SPButton from "./Components/SPButton";


 export default function Studycard() {
  const { loading, data, error} = useFetch(
    "http://localhost:8080/Studycard"
  );
  if (loading) {
    return <Spin tip="Loading cards..." size="large" />;
  }
  if (error) {
    console.log("erorror")
  }

  return (
    <div>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <SPTitle level={2} style={{ margin: 0 }} text="Study Card" />
      </div>
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
              }} >
              <SPTitle   item= {item.label}>
                {item.label}
              </SPTitle>
              <SPButton type={"primary"} Shape={"round"}  name= {"Explore"}>
                Explore
              </SPButton>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
