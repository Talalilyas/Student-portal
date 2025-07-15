
import { Button, Row, Col,  Typography } from "antd";
import { GooglePlusOutlined } from "@ant-design/icons";
import Lecturer from "./Lecturer";
import SPimagebg from "./Components/SPimagebg";

const { Title } = Typography;

export default function Login() {




  return (
    <Row className="login-container" justify="center" align="middle">
      <Col xs={24} sm={18} md={12} lg={16} className="login-image-col">
        <SPimagebg />
      </Col>

      <Col xs={24} sm={18} md={12} lg={8} className="login-form-col">
        <Row justify="center">
          <Col>
            <SPimagebg width="140px" />
          </Col>
        </Row>

        <Title
          level={2}
          className="login-title"
          style={{ textAlign: "center", fontFamily: "cursive" }}
        >
          Sign in UoS
        </Title>

        <Lecturer />

        <Row justify="center">
          <Col>
            <Button
              type="default"
              size="large"
              icon={
                <GooglePlusOutlined
                  style={{ fontSize: "30px", color: "#08c" }}
                />
              }
            >
              Continue with Google
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
