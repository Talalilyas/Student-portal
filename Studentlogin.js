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

  const { postData, loading, error } = useFetch("https://dummyjson.com/auth/login");
const handleSubmit = async () => {
 
  const loginData = { username, password };
  
  const response = await postData(loginData); 


    if (response && response.accessToken) { 
      setAccessToken(response.accessToken); 
      setUser({ username });
      setIsLogin(true);
      console.log(accessToken);
      console.log(user)
      console.log(isLogin)
      message.success("Login successful!"); 
      navigate("/studentdashboard");
    } else {
      message.error(`Login failed: ${error || "Invalid credentials or token not found"}`);
      console.error("Login failed. API response:", response, "Error from hook:", error);
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
              disabled={loading}
            >
              <SPFormInput
                label="Student ID"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your ID"
                rules={[{ required: true, message: "Please enter your username!" }]}
              />
              <SPFormInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                rules={[{ required: true, message: "Please enter your password!" }]}
              />
              <SPButton loading={loading} text={"Login"} />
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}