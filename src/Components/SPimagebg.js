import bgImage from "../Images/university-background-image.jpg";

import { Image } from "antd";

export default function SPimagebg({ width }) {
  return (
    <Image
      width={width}
      height="100%"
      src={bgImage}
      preview={false}
      className="login-bg-image"
    />
  );
}
