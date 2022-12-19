import { configureStore } from "@reduxjs/toolkit";
import navbar from "../components/Navbar/navbar_slice";
import exactpath from "../components/ExactPath/exactpath_slice";
import webfilter from "../pages/Webinars/components/web_filter_slice";

export const store = configureStore({
  reducer: { navbar, exactpath, webfilter },
  devTools: process.env.NODE_ENV !== "production",
});
