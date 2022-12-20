import { createSlice } from "@reduxjs/toolkit";
import apathy from "../../../assets/images/apathy 1.svg";

const initialState = {
  data: [
    {
      pic: apathy,
      title: {
        rus: "Как побороть тревогу?",
        eng: "how-to-overcome-anxiety?",
      },

      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      status: "archive",
    },
    {
      pic: apathy,
      title: {
        rus: "Как побороть тревогу?",
        eng: "how-to-overcome-anxiety?",
      },
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      status: "archive",
    },
    {
      pic: apathy,
      title: {
        rus: "Как побороть тревогу?",
        eng: "how-to-overcome-anxiety?",
      },
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      status: "archive",
    },
    {
      pic: apathy,
      title: {
        rus: "Как побороть тревогу?",
        eng: "how-to-overcome-anxiety?",
      },
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      cost: "Бесплатно",
      lessonType: "Онлайн",
      date: "20 августа в 19.00",
      status: "upcoming",
    },
    {
      pic: apathy,
      title: {
        rus: "Как побороть тревогу?",
        eng: "how-to-overcome-anxiety?",
      },
      descr:
        "В работе с психологом очень важно чувствовать себя в безопасности.",
      cost: "500 pуб.",
      lessonType: "Онлайн",
      date: "31 августа в 12.00",
      status: "upcoming",
    },
  ],
  showedData: [],
  activeFilter: "archive",
};

const filterSlice = createSlice({
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
