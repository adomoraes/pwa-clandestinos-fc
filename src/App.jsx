import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ObrigadoPage from './pages/ObrigadoPage';
import EsgotadoPage from './pages/EsgotadoPage';

function App() {
  const isSoldOut = false; // Altere para true para simular o produto esgotado

  return (
    <Routes>
      <Route path="/" element={isSoldOut ? <Navigate to="/esgotado" /> : <HomePage />} />
      <Route path="/obrigado" element={<ObrigadoPage />} />
      <Route path="/esgotado" element={<EsgotadoPage />} />
    </Routes>
  );
}

export default App;
