import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneOrGmail: "",
  password: "",
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhoneOrGmail(state, action) {
      state.phoneOrGmail = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setRememberMe(state, action) {
      state.rememberMe = action.payload;
    },
    resetAuth(state) {
      state.phoneOrGmail = "";
      state.password = "";
      state.rememberMe = false;
    },
  },
});

export const { setPhoneOrGmail, setPassword, setRememberMe, resetAuth } =
  authSlice.actions;

export default authSlice.reducer;