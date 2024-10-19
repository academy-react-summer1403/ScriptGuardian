import React from "react";
import { FaSignInAlt } from "react-icons/fa";

const LoginButton = () => {
  return (
    <button className="bg-[#2196F3] dark:bg-[#1565C0]  hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] xl:w-[133px] lg:w-[100px] sm:w-[36px] w-[30px] xl:h-[48px] lg:h-[40px] sm:h-[36px] h-[30px]  xl:rounded-[80px] lg:rounded-[80px] rounded-[100%] text-white transition duration-300 ">
      <p className="lg:block hidden xl:text-[14px] lg:text-[14px]">
        ورود به حساب
      </p>
      <div className="lg:hidden w-full h-full flex items-center justify-center">
        <FaSignInAlt className="text-white sm:text-[18px] text-[16px]" />
      </div>
    </button>
  );
};

export { LoginButton };
