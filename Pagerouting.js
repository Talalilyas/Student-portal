import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Studentlogin from './Studentlogin';
import Lecturerlogin from './Lecturerlogin';
import Studentdashboard from './Studentdashboard';
import Coursedatatable from './Coursedatatable'; // Assuming this is your table page
import useLocalStorageState from 'use-local-storage-state';

function Pagerouting() {
  const [isLogin] = useLocalStorageState("isLogin", false);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/studentlogin" element={<Studentlogin />} />
      <Route path="/lecturerlogin" element={<Lecturerlogin />} />

      {/* Protected Dashboard Route */}
      {isLogin ? (
        <Route path="/Studentdashboard" element={<Studentdashboard />}>
          <Route index element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="table" element={<Coursedatatable />} />
        </Route>
      ) : (
        <Route path="/Studentdashboard/*" element={<Navigate to="/" />} />
      )}

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Pagerouting;
