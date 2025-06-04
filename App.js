import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* other routes */}
    </Routes>
  );
}

export default App;
