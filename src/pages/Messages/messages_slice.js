import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  chat: null,
  message: null,
};

export const MessageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
    setChat: (state, { payload }) => {
      state.chat = payload;
    },
  },
});

export const { setMessage, setChat } = MessageSlice.actions;
export default MessageSlice.reducer;
