import React from "react";
import Screen from "./screen";
import Screen2 from "./screen2";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/2" element={<Screen2 />} />
      </Routes>
    </Router>
    </>
  );
};
