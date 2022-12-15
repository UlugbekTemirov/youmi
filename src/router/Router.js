import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import { Home } from "../pages";

// components
import { Navbar } from "../components";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
