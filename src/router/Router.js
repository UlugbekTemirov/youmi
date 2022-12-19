import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages

import {
  Blog,
  CategoryItem,
  Home,
  About,
  Contacts,
  SuccessScreen,
  PaymentScreen,
  Questionare,
  SubmitedScreen,
  Entry,
  Profile,
} from "../pages";

// components
import { Footer, Navbar } from "../components";
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />

        <Route path="/success_screen" element={<SuccessScreen />} />
        <Route path="/payment_screen" element={<PaymentScreen />} />
        <Route path="/submited_screen" element={<SubmitedScreen />} />

        <Route path="/entry" element={<Entry />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/questionare/:step" element={<Questionare />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
