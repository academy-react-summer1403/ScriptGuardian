import React, { useEffect, useRef, useState } from "react";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaComment,
  FaCommentAlt,
  FaHeart,
  FaHome,
  FaLock,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userProfile from "../../images/StudentPanel/NavStudent/images.png";
import { HiX } from "react-icons/hi";
import { useGetStudentProfile } from "../../core/services/api/Panel/GetProfile";

const StudentHamburger = ({ toggleMenu, isMenuOpen, setIsMenuOpen }) => {
  const { data } = useGetStudentProfile();

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    console.log("Logged out");
    setIsModalOpen(false);
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("roles");
    navigate("/");
  };
  return (
    <div>
      <div
        ref={menuRef}
        className={`fixed xl:hidden top-0 right-0 sm:w-[265px] w-[225px]  bg-white shadow-md  transition-transform duration-300 z-10 ${
          isMenuOpen
            ? " translate-x-0 flex"
            : " translate-x-[100%] opacity-0 hidden"
        }`}
      >
        <div className="flex flex-col h-screen  w-full  bg-[#8cc9fa]  dark:bg-[#1e3e57]  ">
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
                src={
                  data?.currentPictureAddress &&
                  data.currentPictureAddress !== "Not-set"
                    ? data.currentPictureAddress
                    : userProfile
                }
                alt=""
                className="w-full h-full rounded-full "
              />
            </div>
            <h3 className="mt-2 text-white">
              {" "}
              {data?.fName ? data?.fName : ""} {data?.lName ? data?.lName : ""}{" "}
            </h3>
          </div>

          <div className="flex flex-col border-t-[1px] mt-1 w-[90%] mx-auto ">
            <NavLink
              to="/panel"
              end
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-x-2 text-white mt-3 shadow-lg px-3 py-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-transform transform hover:scale-105 dark:from-gray-700 dark:to-gray-900"
                  : "flex items-center gap-x-2 text-white mt-3  px-3  w-full"
              }
            >
              <MdDashboard className="text-xl" />
              داشبورد
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-x-2 text-white mt-3 shadow-lg px-3 py-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-transform transform hover:scale-105 dark:from-gray-700 dark:to-gray-900"
                  : "flex items-center gap-x-2 text-white mt-3 py-1 px-3  w-full"
              }
              to="/panel/MyProfile"
            >
              <FaUserCircle className="text-xl" />
              ویرایش پروفایل
            </NavLink>

            <NavLink
              to="/panel/MyCourses"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-x-2 text-white mt-3 shadow-lg px-3 py-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-transform transform hover:scale-105 dark:from-gray-700 dark:to-gray-900"
                  : "flex items-center gap-x-2 text-white mt-3 py-1 px-3  w-full"
              }
            >
              <FaBookOpen className="text-xl" />
              دوره های من
            </NavLink>

            <NavLink
              to="/panel/MyReservedCourses"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-x-2 text-white mt-3 shadow-lg px-3 py-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-transform transform hover:scale-105 dark:from-gray-700 dark:to-gray-900"
                  : "flex items-center gap-x-2 text-white mt-3 py-1 px-3  w-full"
              }
            >
              <FaCalendarAlt className="text-xl" />
              دوره های رزرو شده{" "}
            </NavLink>

            <NavLink
              to="/panel/MyFavoriteCourses"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-x-2 text-white mt-3 shadow-lg px-3 py-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-transform transform hover:scale-105 dark:from-gray-700 dark:to-gray-900"
                  : "flex items-center gap-x-2 text-white mt-3 py-1 px-3  w-full"
              }
            >
              <FaHeart className="text-xl" />
              مورد علاقه
            </NavLink>

            {/* <div className="flex items-center gap-x-2 text-white mt-1 py-1  w-full">
              <FaRegNewspaper className="text-xl" />
              <NavLink to="/panel/MyFavoriteNews">خبر های مورد علاقه </NavLink>
            </div> */}

            <NavLink
              to="/panel/MyCommentPage"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-x-2 text-white mt-3 shadow-lg px-3 py-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-transform transform hover:scale-105 dark:from-gray-700 dark:to-gray-900"
                  : "flex items-center gap-x-2 text-white mt-3 py-1 px-3  w-full"
              }
            >
              <FaCommentAlt className="text-xl" />
              کامنت های من
            </NavLink>
            <NavLink
              to="/panel/ChangePassword"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-x-2 text-white mt-3 shadow-lg px-3 py-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-transform transform hover:scale-105 dark:from-gray-700 dark:to-gray-900"
                  : "flex items-center gap-x-2 text-white mt-3 py-1 px-3  w-full"
              }
            >
              <FaLock className="text-xl" />
              تغییر رمز عبور
            </NavLink>

            <div className="flex items-center gap-x-2 text-white mt-1 py-1  w-full">
              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800"
                >
                  <FaSignOutAlt className="text-xl" />
                  خروج از حساب
                </button>

                {isModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                      ref={menuRef}
                      className="bg-white rounded-lg p-6 max-w-sm w-full"
                    >
                      <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        آیا مطمئن هستید که می‌خواهید از حساب خود خارج شوید؟
                      </h2>
                      <div className="flex justify-end gap-4">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                          لغو
                        </button>
                        <button
                          onClick={handleLogout}
                          className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          بله، خارج شوید
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { StudentHamburger };
