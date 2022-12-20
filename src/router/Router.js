// react
import { useState } from "react";

// react-router-dom
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
  SessionScreen,
  Rates,
  Webinars,
  CategoryItemAnswers,
  WebinarTheme,
  Tariff,
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
        <Route path="/contact" element={<Contacts />} />

        <Route path="/success_screen" element={<SuccessScreen />} />
        <Route path="/payment_screen" element={<PaymentScreen />} />
        <Route path="/submited_screen" element={<SubmitedScreen />} />
        <Route path="/session_screen" element={<SessionScreen />} />

        <Route path="/entry" element={<Entry />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/questionare/:step" element={<Questionare />} />

        <Route path="/tarif" element={<Rates />} />
        <Route path="/psychologists" element={<Psychologists />} />
        <Route path="/webinar" element={<Webinars />} />
        <Route
          path="/webinar/category/:status/:question"
          element={<WebinarTheme />}
        />

        <Route path="/select-tarif" element={<Tariff />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
