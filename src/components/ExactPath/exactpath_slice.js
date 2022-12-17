import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearch: false,
};

export const pathSlice = createSlice({
  name: "exact-path",
  initialState,
  reducers: {
    setShowSearch: (state, { payload }) => {
      state.showSearch = payload;
    },
  },
});

export const { setShowSearch } = pathSlice.actions;
export default pathSlice.reducer;
