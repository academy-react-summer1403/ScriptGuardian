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
        <FaMinus className="text-purple-600 dark:text-purple-900 sm:mr-0 mr-1 text-xl" />
        <h2 className="text-[20px] mr-2 text-[#263238] dark:text-gray-200">
          {title}{" "}
        </h2>
      </div>

      <div className="flex items-center gap-x-4 text-gray-500 dark:text-gray-200">
        {isDarkMode ? (
          <FaMoon
            className="text-gray-800"
            size={20}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaSun
            className="text-yellow-500"
            size={20}
            onClick={toggleDarkMode}
          />
        )}
        <FaBell className="text-xl" />
        <FaShoppingCart className="text-xl" />
      </div>
    </div>
  );
};

export { CommonStudent };
