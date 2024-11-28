import React from "react";
import {
  FaBars,
  FaMinus,
  FaMoon,
  FaShoppingCart,
  FaSun,
  FaBell,
} from "react-icons/fa";

const CommonStudent = ({ toggleMenu, toggleDarkMode, isDarkMode, title }) => {
  return (
    <div className="h-[50px] border-b border-white dark:border-gray-950 w-[95%] flex justify-between items-center ">
      <div className="flex items-center">
        {/* OpenMenu */}
        <div className="xl:hidden flex">
          {/* open-btn*/}
          <button onClick={toggleMenu} className="text-gray-500">
            <FaBars />
          </button>
        </div>
        <FaMinus className="text-[#8cc9fa] dark:text-[#1e3e57] sm:mr-3 mr-1 mt-2 sm:text-xl text-base" />
        <h2 className="sm:text-[20px] text-base sm:mr-2 mr-1 text-[#263238] dark:text-gray-200">
          {title}{" "}
        </h2>
      </div>

      <div className="flex items-center sm:gap-x-4 gap-x-2 text-gray-500 dark:text-gray-200 cursor-pointer">
        {isDarkMode ? (
          <FaSun
            className="text-yellow-500"
            size={20}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaMoon
            className="text-gray-800"
            size={20}
            onClick={toggleDarkMode}
          />
        )}
        {/* <FaBell className="text-xl" /> */}
        {/* <FaShoppingCart className="text-xl" /> */}
      </div>
    </div>
  );
};

export { CommonStudent };
