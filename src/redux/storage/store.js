import { configureStore } from "@reduxjs/toolkit";
import { phoneNumber } from "../slice/phoneNumberSlice"; // به مسیر درست اسلایس اشاره کنید

const store = configureStore({
  reducer: {
    phoneNumber, // استفاده از نام انگلیسی
  },
});

export { store };
