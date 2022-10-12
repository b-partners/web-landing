import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/Home/About';

function App() {
  return (
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/home" element={<Home />} />
      <Route
        path="/"
        element={<Navigate to="/home" replace />}
      />
    </Routes>
  );
}

export default App;
