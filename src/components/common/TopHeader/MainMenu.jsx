import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const MainMenu = () => {
  const location = useLocation();
  // alert(location.pathname);
  return (
    <ul className="flex xl:text-[16px] xl:gap-[48px] lg:gap-[42px]  md:gap-[30px]  text-[#263238] dark:text-white">
      <NavLink
        to={"/Courses"}
        className={({ isActive }) =>
          isActive
            ? "relative block  cursor-pointer before:content-[''] before:absolute before:right-0  before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 before:left-0  "
            : "relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 "
        }
      >
        دوره ها
      </NavLink>
      {location.pathname !== "/Courses" && location.pathname !== "/News" ? (
        <Link
          to="slider"
          smooth={true}
          duration={500}
          className="relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 "
        >
          اساتید
        </Link>
      ) : (
        <NavLink
          to={"/"}
          className="relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 "
        >
          اساتید
        </NavLink>
      )}

      <Link
        to="footer"
        smooth={true}
        duration={500}
        className="relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 "
      >
        ارتباط با ما
      </Link>
      <NavLink
        to={"/News"}
        className={({ isActive }) =>
          isActive
            ? "relative block  cursor-pointer before:content-[''] before:absolute before:right-0  before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 before:left-0  "
            : "relative block  cursor-pointer before:content-[''] before:absolute before:right-0 before:left-full before:bottom-[-3px] before:h-1 before:bg-[#2196F3] dark:before:bg-[#0D47A1] before:transition-all before:duration-300 before:ease-in-out hover:before:right-0 hover:before:left-0 "
        }
      >
        اخبار مقالات
      </NavLink>
    </ul>
  );
};

export { MainMenu };
