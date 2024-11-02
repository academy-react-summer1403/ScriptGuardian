import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "example@gmail.com",
    name: "example",
  },
  reducers: {
    onEmailChange: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { onEmailChange } = userSlice.actions;
export const user = userSlice.reducer;
