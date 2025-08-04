import { Row, Col, Card, Typography, Progress, Flex, Spin, Alert } from "antd";
import useFetch from "./FetchHOOk/Hookfetchdata";
import { useEffect, useMemo, useState } from "react";

const { Text } = Typography;

export default function Myprogress() {
  const { loading, data, error } = useFetch("http://localhost:8080/myprogress");
  const [loader, setLoader] = useState(false);

  const twoColors = {
    "0%": "#108ee9",
    "100%": "#87d068",
  };

  const conicColors = {
    "0%": "#87d068",
    "50%": "#ffe58f",
    "100%": "#ffccc7",
  };

  const myCompo = useMemo(() => {
    console.log("---loading----", loader);
    return <p>{loader === true ? "loaded" : "not loaded"}</p>;
  }, [loader]);

  useEffect(() => {
    setLoader();
  }, [data]);
  const Progresss = () => {
    return data.map((item) => (
      <div>
        <Progress
          type={item.type}
          percent={item.percent}
          strokeColor={item.percent >= 95 ? conicColors : twoColors}
        />
        <Text>{item.name}</Text>
      </div>
    ));
  };

  if (loading) {
    return (
      <Spin
        tip="Loading Progress..."
        style={{ display: "block", marginTop: 100 }}
      />
    );
  }

  if (error) {
    return (
      <Alert message="Error loading data" description={error} type="error" />
    );
  }

  if (!data) {
    return (
      <Alert
        message="No Data"
        description="No progress data available"
        type="info"
      />
    );
  }

  return (
    <>
      Hello world --- {myCompo}
      <Row gutter={[16, 16]}>
        <Col md={12} lg={12}>
          <Card title="Course Progress (Circle Type)">
            <Flex gap="large" wrap justify="center">
              {Progresss("circle")}
            </Flex>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
        <Col xs={24}>
          <Card title="Course Progress (Dashboard Type)">
            <Flex gap="large" wrap justify="center">
              {Progresss("dashboard")}
            </Flex>
          </Card>
        </Col>
      </Row>
    </>
  );
}
