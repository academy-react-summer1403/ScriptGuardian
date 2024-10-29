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
      <div
        className={`absolute top-0 right-0 sm:w-[40%] w-full  bg-white shadow-md  transition-transform duration-300 z-10 ${
          isMenuOpen
            ? " translate-x-0 flex"
            : " translate-x-[100%] opacity-0 hidden"
        }`}
      >
        <div className="flex flex-col h-[100vh]  w-full  bg-[#7665E7]   ">
          <div className="flex justify-between">
            {" "}
            <Link to="/">
              {" "}
              <FaHome className="text-white mr-2 mt-2 text-xl " />
            </Link>
            <HiX
              className="text-white ml-2 mt-2 text-xl"
              onClick={toggleMenu}
            />
          </div>

          <div className="flex flex-col  justify-center items-center ">
            <div className="flex w-[100px] h-[100px]  rounded-full">
              <img
                src={userProfile}
                alt=""
                className="w-full h-full rounded-full "
              />
            </div>
            <h3 className="mt-2 text-white">نام کاربر</h3>
          </div>

          <div className="flex flex-col border-t-[1px] mt-1 w-[90%] mx-auto ">
            <div className="flex items-center gap-x-2 text-white mt-3 py-2  w-full">
              <MdDashboard className="text-xl" />
              <NavLink to="/panel">داشبورد</NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaUserCircle className="text-xl" />
              <NavLink to="/panel/MyProfile">پروفایل</NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaBookOpen className="text-xl" />
              <NavLink to="/panel/MyCourses">دوره های من</NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaLock className="text-xl" />
              <NavLink to="/panel/ChangePassword">تغییر رمز عبور</NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaSignOutAlt className="text-xl" />
              <NavLink to="/panel/LogOut">خروج از حساب</NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaComment className="text-xl" />
              <NavLink to="/panel/MyComments">نظرات ثبت شده</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        {/* Common */}
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
            <h2 className="text-[20px] mr-2 text-[#263238]"> داشبورد</h2>
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

        {/* Unic */}

        {/* UserInform */}
        <div className="flex border-purple-800 dark:border-purple-600 py-3 rounded-xl mt-5 w-[95%]  border flex-col relative  ">
          <div className="flex lg:mr-[5%]  mt-3 md:flex-nowrap flex-wrap md:flex-row flex-col md:flex-start items-center lg:gap-x-0 md:gap-x-[10%] md:gap-y-0 gap-y-3 ">
            <div className="flex items-center md:w-[200px] lg:mr-0 md:mr-3 ">
              <p className="text-[#455A64] dark:text-gray-400">
                نام و نام خانوادگی:
              </p>
              <p className="text-purple-900 dark:text-purple-700">فلان فلانی</p>
            </div>

            <div className="flex items-center w-auto lg:mr-[10%]">
              <p className="text-[#455A64] dark:text-gray-400">تاریخ تولد:</p>
              <p className="text-purple-900 dark:text-purple-700">
                {" "}
                1385/05/08
              </p>
            </div>

            <div className="flex items-center w-auto lg:mr-[28%]">
              <p className="text-[#455A64] dark:text-gray-400">شماره همراه:</p>
              <p className="text-purple-900 dark:text-purple-700">
                {" "}
                90111111111
              </p>
            </div>
          </div>

          <div className="flex mt-3 lg:mr-[5%] md:mb-5 mb-12 md:flex-nowrap flex-wrap md:flex-row flex-col md:items-start items-center md:gap-y-0 gap-y-3  ">
            <div className="flex items-center w-auto justify-center lg:mr-0 md:mr-3">
              <p className="text-[#455A64] dark:text-gray-400">شماره ملی:</p>
              <p className="text-purple-900 dark:text-purple-700">
                {" "}
                2242242244
              </p>
            </div>

            <div className="flex items-center lg:mr-[15.5%] md:mr-[17%]">
              <p className="text-[#455A64] dark:text-gray-400"> ایمیل:</p>
              <p className="text-purple-900 dark:text-purple-700">
                {" "}
                TestEmail@gmail.com
              </p>
            </div>
          </div>

          <Link
            to={"/panel/MyProfile"}
            className="absolute bottom-0 left-0 w-[100px] flex items-center justify-center h-[44px] rounded-t-xl border-t border-r  border-black dark:border-white dark:text-white text-[#455A64]  text-sm"
          >
            ویرایش
          </Link>
        </div>

        {/* UserCourses */}
        <div className="flex sm:flex-row flex-col w-[95%] mt-10 gap-x-10 ">
          {/* Right */}
          <div className="flex flex-col sm:w-[47.5%] ">
            <div className="flex items-center text-xl gap-x-1 ">
              {" "}
              <FaMinus className="text-xl text-purple-600 dark:text-purple-800" />
              <h3 className="text-[#263238] dark:text-gray-200 font-bold">
                {" "}
                اخرین دوره ثبت شده
              </h3>
            </div>

            <div className="flex flex-col w-full mt-5 gap-y-5 ">
              {/* Items */}
              <div className="flex w-full bg-white dark:bg-gray-900 rounded-md h-[75px] shadow-ّFirst-shadow  items-center border-gray-200 dark:border-gray-950">
                <div className="h-[85%] w-[25%] mr-[3%] ">
                  <img
                    src={CourseImg}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="flex w-[100%] h-[85%] flex-col justify-between ">
                  <h3 className="mr-3 text-[#263238] dark:text-gray-200">
                    آموزش رایگان اچ تی ام ال
                  </h3>
                  <div className="flex justify-between text-[#455A64] dark:text-gray-400 items-center mr-3">
                    <p className="text-sm">دکتر بحر</p>

                    <p className="text-sm ml-3">
                      <span className="text-purple-700 dark:text-purple-500">
                        500,000
                      </span>{" "}
                      تومان
                    </p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="flex w-full bg-white dark:bg-gray-900 rounded-md h-[75px] shadow-ّFirst-shadow  items-center border-gray-200 dark:border-gray-950">
                <div className="h-[85%] w-[25%] mr-[3%] ">
                  <img
                    src={CourseImg}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="flex w-[100%] h-[85%] flex-col justify-between ">
                  <h3 className="mr-3 text-[#263238] dark:text-gray-200">
                    آموزش رایگان اچ تی ام ال
                  </h3>
                  <div className="flex justify-between text-[#455A64] dark:text-gray-400 items-center mr-3">
                    <p className="text-sm">دکتر بحر</p>

                    <p className="text-sm ml-3">
                      <span className="text-purple-700 dark:text-purple-500">
                        500,000
                      </span>{" "}
                      تومان
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left */}

          <div className="flex flex-col sm:w-[47.5%] sm:mt-0 mt-5 mb-5">
            <div className="flex items-center text-xl gap-x-1 ">
              {" "}
              <FaMinus className="text-xl text-purple-600 dark:text-purple-800" />
              <h3 className="text-[#263238] dark:text-gray-200 font-bold"> دوره های پیشنهادی</h3>
            </div>

            <div className="flex flex-col w-full mt-5 gap-y-5 ">
              {/* Items */}
              <div className="flex w-full bg-white dark:bg-gray-900 rounded-md h-[75px] shadow-ّFirst-shadow  items-center border-gray-200 dark:border-gray-950">
                <div className="h-[85%] w-[25%] mr-[3%] ">
                  <img
                    src={CourseImg}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="flex w-[100%] h-[85%] flex-col justify-between ">
                  <h3 className="mr-3 text-[#263238] dark:text-gray-200">
                    آموزش رایگان اچ تی ام ال
                  </h3>
                  <div className="flex justify-between text-[#455A64] dark:text-gray-400 items-center mr-3">
                    <p className="text-sm">دکتر بحر</p>

                    <p className="text-sm ml-3">
                      <span className="text-purple-700 dark:text-purple-500">
                        500,000
                      </span>{" "}
                      تومان
                    </p>
                  </div>
                </div>
              </div>

              {/* Items */}
              {/* Items */}
              <div className="flex w-full bg-white dark:bg-gray-900 rounded-md h-[75px] shadow-ّFirst-shadow  items-center border-gray-200 dark:border-gray-950">
                <div className="h-[85%] w-[25%] mr-[3%] ">
                  <img
                    src={CourseImg}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="flex w-[100%] h-[85%] flex-col justify-between ">
                  <h3 className="mr-3 text-[#263238] dark:text-gray-200">
                    آموزش رایگان اچ تی ام ال
                  </h3>
                  <div className="flex justify-between text-[#455A64] dark:text-gray-400 items-center mr-3">
                    <p className="text-sm">دکتر بحر</p>

                    <p className="text-sm ml-3">
                      <span className="text-purple-700 dark:text-purple-500">
                        500,000
                      </span>{" "}
                      تومان
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { DashBoard };
