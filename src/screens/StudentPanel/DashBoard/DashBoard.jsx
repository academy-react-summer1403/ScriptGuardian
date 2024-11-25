import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaBell,
  FaBookOpen,
  FaCloudscale,
  FaComment,
  FaHamburger,
  FaHome,
  FaLock,
  FaMinus,
  FaMoon,
  FaShoppingCart,
  FaSignOutAlt,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import userProfile from "../../.././images/StudentPanel/NavStudent/images.png";
import CourseImg from "../../../images/StudentPanel/DashBoard/Untitled.jpg";
import { UserInFormation } from "../../../components/panel/DashBoard/UserInFormation";
import { BottomDashBoard } from "../../../components/panel/DashBoard/BottomDashBoard";
import { CommonStudent } from "../../../components/HamberGerStudentPanel/CommonStudent";
import { StudentHamburger } from "../../../components/HamberGerStudentPanel/Studenthamburger";

const DashBoard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // وضعیت اولیه دارک مود بر اساس localStorage
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // مدیریت تغییر کلاس بر روی body و ذخیره‌سازی حالت در localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // تغییر حالت دارک مود هنگام کلیک
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* hamburger */}
      <StudentHamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <div className="flex flex-col items-center ">
        {/* Common */}
        <CommonStudent
          toggleMenu={toggleMenu}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          title={"داشبورد"}
        />

        {/* Unic */}

        {/* UserInform */}
        <UserInFormation />

        {/* UserCourses */}
        <BottomDashBoard />
      </div>
    </>
  );
};

export { DashBoard };
