// src/slice/studentProfileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const studentProfileSlice = createSlice({
  name: "studentProfile",
  initialState: {
    data: null, // داده‌های پروفایل به طور اولیه خالی
  },
  reducers: {
    setStudentProfile: (state, action) => {
      state.data = action.payload; // ذخیره‌سازی داده‌های پروفایل در استور
    },
  },
});

export const { setStudentProfile } = studentProfileSlice.actions;
export default studentProfileSlice.reducer;
