
import { Row, Col, Image } from "antd";
import bgimage from "../Images/university-background-image.jpg";

export default function LogoHeader() {
  return (
    <Row justify="center" style={{ width: "100%" }}>
      <Col>
        <Image src={bgimage} preview={false} style={{ width: "150px", height: "auto" }} />
      </Col>
    </Row>
  );
}
