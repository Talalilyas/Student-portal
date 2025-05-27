import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Studentlogin from './Studentlogin';
import Lecturerlogin from './Lecturerlogin';
import Studentdashboard from './Studentdashboard';
import useLocalStorageState from 'use-local-storage-state';

function Pagerouting() {
  const [isLogin] = useLocalStorageState("isLogin", false);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/studentlogin" element={<Studentlogin />} />
      <Route path="/Lecturerlogin" element={<Lecturerlogin />} />
      
      {isLogin 
        ? <Route path="/Studentdashboard" element={<Studentdashboard />} />
        : <Route path="/Studentdashboard" element={<Navigate to="/" />} />
      }

   
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Pagerouting;
