import { configureStore } from "@reduxjs/toolkit";
import navbar from "../components/Navbar/navbar_slice";

export const store = configureStore({
  reducer: { navbar },
  devTools: process.env.NODE_ENV !== "production",
});
