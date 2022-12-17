import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import { Blog, CategoryItem, CategoryItemAnswers, Home } from "../pages";

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/category/:name" element={<CategoryItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
