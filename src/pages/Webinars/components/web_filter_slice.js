import { createSlice } from "@reduxjs/toolkit";
import apathy from "../../../assets/images/apathy 1.svg";

const initialState = {
  data: [
    {
      pic: apathy,
      title: "Как побороть тревогу?",
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      status: "archive",
    },
    {
      pic: apathy,
      title: "Как побороть тревогу?",
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      status: "archive",
    },
    {
      pic: apathy,
      title: "Как побороть тревогу?",
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      status: "archive",
    },
    {
      pic: apathy,
      title: "Как побороть тревогу?",
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      status: "upcoming",
    },
    {
      pic: apathy,
      title: "Как побороть тревогу?",
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      status: "upcoming",
    },
  ],
  showedData: [],
  activeFilter: "archive",
};

export const filterSlice = createSlice({
  name: "web_filters",
  initialState,
  reducers: {
    setActiveFilter: (state, { payload }) => {
      state.activeFilter = payload;
    },
    fetchData: (state, { payload }) => {
      state.showedData = payload;
    },
  },
});

export const { setActiveFilter, fetchData } = filterSlice.actions;
export default filterSlice.reducer;
