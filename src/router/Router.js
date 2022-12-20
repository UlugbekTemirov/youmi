import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages

import {
  Blog,
  CategoryItem,
  Home,
  About,
  Rates,
  Webinars,
  CategoryItemAnswers,
  WebinarTheme,
} from "../pages";

// components
import { Footer, Navbar } from "../components";
import { ButtonSupport } from "../components/Button/Button";
import Psychologists from "../pages/Psychologists/Psychologists";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ButtonSupport />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/category/:name/" element={<CategoryItem />} />
        <Route
          path="/blog/category/:name/:question"
          element={<CategoryItemAnswers />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/tarif" element={<Rates />} />
        <Route path="/psychologists" element={<Psychologists />} />
        <Route path="/webinar" element={<Webinars />} />
        <Route
          path="/webinar/category/:status/:question"
          element={<WebinarTheme />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
