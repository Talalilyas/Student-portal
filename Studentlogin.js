import { Row, Col, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { Form, Card } from "antd";
import SPFormInput from "./Components/SPFrominput";
import SPButton from "./Components/SPButton";
import SPlogoheader from "./Components/SPlogoheader";
import SPTitle from "./Components/SpTitle";
import useFetch from "./FetchHOOk/Hookfetchdata";

export default function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const [users, setUser] = useLocalStorageState("user", { username: "" });
  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", "");
  const navigate = useNavigate();

  console.log(isLogin);
  console.log(users);
  console.log(accessToken);
  const {loading,error,sendReq: loginRequest,} = useFetch("https://dummyjson.com/auth/login", "POST", false);

  const handleSubmit = async () => {
    const loginData = { username,  password,  expiresInMins: 30, };
    const data = await loginRequest(loginData);
     
    if (data) {
      message.success("Login successful!");
      setAccessToken(data.token);
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
      <SPTitle text={"Student Performing Portal Login"} />
      <Row justify="center">
        <Col span={6}>
          <Card bodyStyle={{ backgroundColor: "#002766" }}>
            <Form
              name="loginForm"
              layout="vertical"
              onFinish={handleSubmit}
              disabled={loading}>
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
              <SPButton loading={loading} />
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
