import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './Login';
import Studentlogin from './Studentlogin';
import Lecturerlogin from './Lecturerlogin';
import Studentdashboard from './Studentdashboard'; // acts as layout
import Coursedatatable from './Coursedatatable';
import Studentexam from './Studentexam';
import useLocalStorageState from 'use-local-storage-state';

// Layout for dashboard that renders nested routes
const DashboardLayout = () => (
  <div className="dashboard-layout">
    <Studentdashboard />
    <Outlet />
  </div>
);

function Pagerouting() {
  const [isLogin] = useLocalStorageState('isLogin', false);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/studentlogin" element={<Studentlogin />} />
      <Route path="/lecturerlogin" element={<Lecturerlogin />} />

      {/* Protected routes */}
      {isLogin ? (
        <Route path="/studentdashboard" element={<DashboardLayout />}>
          <Route index element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="mycourse" element={<Coursedatatable />} />
          <Route path="coursecatalogue" element={<Studentexam />} />
        </Route>
      ) : (
        <Route path="/studentdashboard/*" element={<Navigate to="/" replace />} />
      )}

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Pagerouting;
