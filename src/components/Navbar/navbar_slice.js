import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showPage: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setShowPage: (state) => {
      state.showPage = !state.showPage;
    },
  },
});

export const { setShowPage } = navbarSlice.actions;
export default navbarSlice.reducer;
