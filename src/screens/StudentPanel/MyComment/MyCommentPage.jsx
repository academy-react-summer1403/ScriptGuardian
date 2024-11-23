import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaBell,
  FaBookOpen,
  FaCloudscale,
  FaComment,
  FaEye,
  FaHamburger,
  FaHome,
  FaLock,
  FaMinus,
  FaMoon,
  FaShoppingCart,
  FaSignOutAlt,
  FaSun,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userProfile from "../../.././images/StudentPanel/NavStudent/images.png";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import Test from "../../../images/StudentPanel/MyCourses/images.png";
import ReactPaginate from "react-paginate";
import {
  useDeleteMyReservedCourses,
  useMyCourses,
  useMyReservedCourses,
} from "../../../core/services/api/Panel/handelMyCourses";
import { ListPanel } from "../../../components/common/ListPanl/ListPanel";
import { StudentHamburger } from "../../../components/HamberGerStudentPanel/Studenthamburger";
import { CommonStudent } from "../../../components/HamberGerStudentPanel/CommonStudent";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import MyCourseComment from "../../../components/MyCommentPanel/MyCourseComment";
import MyNewsComment from "../../../components/MyCommentPanel/MyNewsComment";
const MyCommentPage = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
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

  //dropdown

  const [openTab, setOpenTab] = useState(1);

  const activeClasses =
    "border dark:border-white border-gray-950 rounded-t text-blue-700";
  const inactiveClasses = "text-blue-500 hover:text-blue-700";

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
          title={"کامنت های من"}
        />

        {/* Unic */}
        <div className=" mt-5 ">
          <ul className="flex gap-x-5">
            <li
              onClick={() => setOpenTab(1)}
              className={`-mb-px mr-1 ${openTab === 1 ? "-mb-px" : ""}`}
            >
              <p
                className={`bg-white dark:bg-gray-950 inline-block py-2 px-4 font-semibold ${
                  openTab === 1 ? activeClasses : inactiveClasses
                }`}
              >
                کامنت های من در دوره ها
              </p>
            </li>
            <li
              onClick={() => setOpenTab(2)}
              className={`mr-1 ${openTab === 2 ? "-mb-px" : ""}`}
            >
              <p
                className={`bg-white inline-block  dark:bg-gray-950  py-2 px-4 font-semibold ${
                  openTab === 2 ? activeClasses : inactiveClasses
                }`}
              >
                کامنت های من در خبر ها
              </p>
            </li>
          </ul>
          <div className="w-full"></div>
        </div>

        {openTab === 1 && (
          <>
            <MyCourseComment />
          </>
        )}

        {openTab === 2 && (
          <>
            <MyNewsComment />
          </>
        )}
      </div>
    </>
  );
};

export { MyCommentPage };
