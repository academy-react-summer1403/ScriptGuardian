import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul className="flex xl:text-[16px] xl:gap-[48px] lg:gap-[42px]  md:gap-[30px]  text-[#263238] dark:text-white">
      <li className="relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 ">
        <NavLink to={"/Courses"}>دوره ها</NavLink>{" "}
      </li>
      <li className="relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 ">
        اساتید
      </li>
      <li className="relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 ">
        ارتباط با ما
      </li>
      <li className="relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 ">
        <NavLink to={"/News"}>اخبار مقالات</NavLink>
      </li>
    </ul>
  );
};

export { MainMenu };
