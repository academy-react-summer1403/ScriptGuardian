import { configureStore } from "@reduxjs/toolkit";
import { phoneNumber } from "../slice/phoneNumberSlice"; // به مسیر درست اسلایس اشاره کنید
import studentProfileReducer from "../slice/studentProfileSlice";
import menuReducer from "../slice/menuSlice ";
import authReducer from "../slice/authSlice.js";
const store = configureStore({
  reducer: {
    phoneNumber,
    studentProfileReducer,
    menu: menuReducer,
    auth: authReducer,
  },
});

export { store };
