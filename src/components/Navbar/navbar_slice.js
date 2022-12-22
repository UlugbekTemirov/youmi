import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showPage: false,
  loggedIn: "false",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setShowPage: (state) => {
      state.showPage = !state.showPage;
    },
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
  },
});

export const { setShowPage, setLoggedIn } = navbarSlice.actions;
export default navbarSlice.reducer;
