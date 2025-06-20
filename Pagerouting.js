import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Studentlogin from "./Studentlogin";
import Lecturerlogin from "./Lecturerlogin";
import Studentdashboard from "./Studentdashboard";

import Academiccalender from "./Academiccalender";
import Myprogress from "./Myprogress";
import Resultcard from "./Resultcard";
import DashboardOverview from "./DashboardOverview"; 
import useLocalStorageState from "use-local-storage-state";
import Studycard from "./Studycard";
import CourseTable from "./CourseTable";

function Pagerouting() {
  const [isLogin] = useLocalStorageState("isLogin", false);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/studentlogin" element={<Studentlogin />} />
      <Route path="/lecturerlogin" element={<Lecturerlogin />} />

      {isLogin ? (
        <Route path="/studentdashboard" element={<Studentdashboard />}>
          <Route index element={<DashboardOverview />} /> 
          <Route path="mycourse" element={<CourseTable  />} />
          <Route path="coursecatalogue" element={<CourseTable   title="Course Catalogue"
      pagination={{ pageSize: 9 }}
      useCard={true}/>} />
          <Route path="academiccalendar" element={<Academiccalender />} />
          <Route path="myprogress" element={<Myprogress />} />
          <Route path="resultcard" element={<Resultcard />} />
          <Route path="studycard" element={<Studycard/>}/>
        </Route>
      ) : (
        <Route path="/studentdashboard/*" element={<Navigate to="/" />} />
      )}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Pagerouting;
