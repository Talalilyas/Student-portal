import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import { Image } from "antd";
// import StepTwo from './StepTwo';
// import StepThree from './StepThree';

function App() {
  return (
    <Routes>
      {<Route path="/" element={<Login />} />}
      {/* <Route path="/step-2" element={<StepTwo />} />
      <Route path="/step-3" element={<StepThree />} /> */}
    </Routes>
  );
}

export default App;
