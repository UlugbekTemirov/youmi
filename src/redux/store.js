import { configureStore } from "@reduxjs/toolkit";
import navbar from "../components/Navbar/navbar_slice";
import exactpath from "../components/ExactPath/exactpath_slice";

export const store = configureStore({
  reducer: { navbar, exactpath },
  devTools: process.env.NODE_ENV !== "production",
});
