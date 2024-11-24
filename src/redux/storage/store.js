import { configureStore } from "@reduxjs/toolkit";
import { phoneNumber } from "../slice/phoneNumberSlice"; // به مسیر درست اسلایس اشاره کنید
import studentProfileReducer from "../slice/studentProfileSlice";
import menuReducer from "../slice/menuSlice ";

const store = configureStore({
  reducer: {
    phoneNumber,
    studentProfileReducer,
    menu: menuReducer,
  },
});

export { store };
