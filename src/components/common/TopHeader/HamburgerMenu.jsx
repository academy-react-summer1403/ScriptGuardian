import React from "react";
import { FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";
const HamburgerMenu = () => {
  return (
    <div className="flex md:hidden  justify-center items-center mr-[5px] z-10">
      {/* چک‌باکس */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label htmlFor="menu-toggle" className="cursor-pointer ">
        {/* آیکون همبرگر */}
        <FaBars className="w-auto h-auto sm:w-[18px] " />
      </label>

      {/* منو */}
      <div className="fixed top-0 left-0 w-48 h-full bg-gray-800 text-white transform -translate-x-full transition-transform duration-300 peer-checked:translate-x-0">
        <div className="flex justify-between items-center p-2">
          <span className="text-sm">اسکریپت گاردین</span>
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer text-white text-lg"
          >
            <FaTimes/> {/* آیکون بستن */}
          </label>
        </div>
        <ul className="space-y-2 p-2">
          <li>
            <a
              href="#"
              className="block text-white hover:bg-gray-600 p-1 text-sm"
            >
              دوره ها
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white hover:bg-gray-600 p-1 text-sm"
            >
              اساتید
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white hover:bg-gray-600 p-1 text-sm"
            >
              ارتباط با ما
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white hover:bg-gray-600 p-1 text-sm"
            >
              اخبار مقالات
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { HamburgerMenu };
