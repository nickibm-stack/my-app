import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Sports from './pages/Sports';
import News from './pages/News';
import ProfilePage from './pages/ProfilePage';

import { BrowserRouter, Route, Routes } from "react-router";

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/manualTest" element={<Sports />} />
        <Route path="/documentHelper" element={<News />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
