import { Row, Col, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { Form, Card } from "antd";
import SPFormInput from "./Components/SPFrominput";
import SPButton from "./Components/SPButton";
import SPTitle from "./Components/SpTitle";
import SPlogoheader from "./Components/SPlogoheader";
import useFetch from "./FetchHOOk/Hookfetchdata";

export default function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const [user, setUser] = useLocalStorageState("user", { username: "" });
  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", "");
  const navigate = useNavigate();

  const { postData, postLoading, error } = useFetch(
    "https://dummyjson.com/auth/login",
    
  );

  console.log("Hook returns:", { postData, postLoading, error });

  const handleSubmit = async () => {
    if (!postData) {
      console.error("postData function is not available");
      message.error("Login function not available");
      return;
    }

    const loginData = { username, password, expiresInMins: 30 };
    const response = await postData(loginData);

    if (response) {
     
      setAccessToken(response.token);
      setUser({ username });
      setIsLogin(true);
      navigate("/studentdashboard");
    } else {
      message.error(`Login failed: ${error || "Unknown error"}`);
    }
  };

  return (
    <>
      <SPlogoheader />
      <SPTitle text="Student Performing Portal Login" />
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
