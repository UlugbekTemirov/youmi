import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import { About, Home } from "../pages";

// components
import { Navbar } from "../components";
import { ButtonSupport } from "../components/Button/Button";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ButtonSupport />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
