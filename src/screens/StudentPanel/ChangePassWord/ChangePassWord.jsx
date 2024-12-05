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
import { usePanelChangePassword } from "../../../core/services/api/Panel/HandelChangePAss";
import { useFormik, validateYupSchema } from "formik";
import { validationEditPass } from "../../../core/services/validation/validationSchema/Panel";
import { toast } from "react-toastify";
import { CommonStudent } from "../../../components/HamberGerStudentPanel/CommonStudent";
import { StudentHamburger } from "../../../components/HamberGerStudentPanel/Studenthamburger";
import { ChangePassComp } from "../../../components/panel/SecComp/ChangePassComp";
import Security from "../../../components/panel/SecComp/Security";
const ChangePassWord = () => {
  //handel menu

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "border dark:border-white border-gray-950 rounded";
  const inactiveClasses = "";

  return (
    <>
      {/* hamburger */}
      <StudentHamburger
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="flex flex-col items-center ">
        {/* Common */}
        <CommonStudent
          toggleMenu={toggleMenu}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          title={"تغییر رمز عبور"}
        />

        {/* Unic */}
        <div className=" mt-5 ">
          <ul className="flex sm:gap-x-5 gap-x-1">
            <li
              onClick={() => setOpenTab(1)}
              className={`-mb-px mr-1 ${openTab === 1 ? "-mb-px" : ""}`}
            >
              <p
                className={`bg-white dark:bg-gray-950 inline-block py-2 sm:px-4 px-1 sm:text-base text-sm  dark:text-white ${
                  openTab === 1 ? activeClasses : inactiveClasses
                }`}
              >
                ویرایش رمز عبور{" "}
              </p>
            </li>
            <li
              onClick={() => setOpenTab(2)}
              className={`mr-1 ${openTab === 2 ? "-mb-px" : ""}`}
            >
              <p
                className={`bg-white inline-block  dark:bg-gray-950  py-2 sm:px-4 px-1 sm:text-base text-sm dark:text-white ${
                  openTab === 2 ? activeClasses : inactiveClasses
                }`}
              >
                امنیت{" "}
              </p>
            </li>
          </ul>
          <div className="w-full"></div>
        </div>

        {openTab === 1 && (
          <>
            <ChangePassComp />
          </>
        )}

        {openTab === 2 && (
          <>
            <Security />{" "}
          </>
        )}
      </div>
    </>
  );
};

export { ChangePassWord };
