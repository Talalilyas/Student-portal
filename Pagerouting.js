import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Studentlogin from "./Studentlogin";
import Lecturerlogin from "./Lecturerlogin";
import Studentdashboard from "./Studentdashboard";
import Coursedatatable from "./Coursedatatable"; // Assuming this is your table page
import useLocalStorageState from "use-local-storage-state";
import Coursecatalogue from "./Coursecatalogue";
import Academiccalender from "./Academiccalender";
import WelcomeDashboard from "./WelcomeDashboard";
import Myprogress from "./Myprogress";
import Resultcard from "./Resultcard";
function Pagerouting() {
  const [isLogin] = useLocalStorageState("isLogin", false);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/studentlogin" element={<Studentlogin />} />
      <Route path="/lecturerlogin" element={<Lecturerlogin />} />

      {isLogin ? (
        <Route path="/studentdashboard" element={<Studentdashboard />}>
  <Route index element={<WelcomeDashboard />} />

          <Route path="mycourse" element={<Coursedatatable />} />
          <Route path="coursecatalogue" element={<Coursecatalogue />} />
          <Route path="academiccalendar" element={<Academiccalender />} />

          <Route path ="myprogress" element ={< Myprogress/>} />
          <Route path ="resultcard" element ={<Resultcard/>}/>
        </Route>
      ) : (
        <Route path="/studentdashboard/*" element={<Navigate to="/" />} />
      )}

     
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Pagerouting;
