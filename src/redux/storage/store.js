import { configureStore } from "@reduxjs/toolkit";
import { phoneNumber } from "../slice/phoneNumberSlice"; // به مسیر درست اسلایس اشاره کنید
import studentProfileReducer from "../slice/studentProfileSlice";

const store = configureStore({
  reducer: {
    phoneNumber, // استفاده از نام انگلیسی
    studentProfileReducer,
  },
});

export { store };
