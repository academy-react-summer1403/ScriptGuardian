import { createSlice } from "@reduxjs/toolkit";

const phoneNumberSlice = createSlice({
  name: "phoneNumber", // تغییر به انگلیسی
  initialState: {
    phoneNumber: "",
  },
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

// Export اکشن برای استفاده در کامپوننت
export const { setPhoneNumber } = phoneNumberSlice.actions;

// Export ریدوسر برای استفاده در store
export const phoneNumber = phoneNumberSlice.reducer;
