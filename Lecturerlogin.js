import { Row, Col, Image, Typography, message } from "antd";
import bgimage from "./Images/university-background-image.jpg";
import useLocalStorageState from "use-local-storage-state";
import { Form, Input, Button, Card } from "antd";
import { useState, usenavigate } from "react";
import SPlogoheader from "./Components/SPlogoheader";
import SPTitle from "./Components/SpTitle";
import SPFormInput from "./Components/SPFrominput";
import usefetch from "./FetchHOOk/Hookfetchdata";
import SPButton from "./Components/SPButton";

import { useNavigate } from "react-router-dom";
export default function Lecturerlogin() {


  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [isLogins, setIsLogins] = useLocalStorageState("isLogins", false);
  const [user, setUser] = useLocalStorageState("user", { username: "" });
  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", "");

  const navigate = useNavigate();
  const { postData, postLoading, error } = usefetch(
    "https://dummyjson.com/auth/login"
  );

  const handleSubmit = async () => {
    const loginData = { username, password, expiresInMins: 30 };
    const response = await postData(loginData);
    if (response) {
      message.success("Login successful!");
      setAccessToken(response.token);
      setUser({ username });
      setIsLogins(true);
      console.log(accessToken);
      console.log(isLogins)
      console.log(user)
    navigate("/teacherdashboard"); 
    } else {
      message.error(`Login failed: ${error || "Unknown error"}`);
    }
  };

  return (
    <>
      <SPlogoheader />
      <SPTitle text="Teacher Performing Portal Login" />
      <Row justify="center">
        <Col span={6}>
          <Card bodyStyle={{ backgroundColor: "#002766" }}>
            <Form
              name="loginForm"
              layout="vertical"
              onFinish={handleSubmit}
              disabled={postLoading}
            >
              <SPFormInput
                label="Student ID"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your ID"
                rules={[
                  { required: true, message: "Please enter your username!" },
                ]}
              />
              <SPFormInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              />
              <SPButton loading={postLoading} />
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
