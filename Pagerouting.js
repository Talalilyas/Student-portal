import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Studentlogin from './Studentlogin';

function Pagerouting() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/studentlogin" element={<Studentlogin />} />
    </Routes>
  );
}

export default Pagerouting;
