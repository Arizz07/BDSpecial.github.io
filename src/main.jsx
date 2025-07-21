import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Frst from './components/Frst';
import './index.css';
// import your Second component here
import Second from './components/Second';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/first" element={<Frst />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);