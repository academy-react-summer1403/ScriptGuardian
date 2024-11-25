import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaComment,
  FaCommentAlt,
  FaHeart,
  FaHome,
  FaLock,
  FaRegNewspaper,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import userProfile from "../images/StudentPanel/NavStudent/images.png";
import { useGetStudentProfile } from "../core/services/api/Panel/GetProfile";

const StudentLayout = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    // در اینجا کد خروج از حساب را اضافه کنید
    console.log("Logged out");
    setIsModalOpen(false);
    localStorage.removeItem("token"); // توکن را حذف می‌کنیم
    localStorage.removeItem("id"); // توکن را حذف می‌کنیم
    localStorage.removeItem("roles"); // توکن را حذف می‌کنیم
    navigate("/");
  };
  //API
  const { data } = useGetStudentProfile();
  const handleImage = data?.currentPictureAddress || userProfile;

  return (
    <>
      <div className="flex container   md:mt-5 min-h-[600px] gap-x-7     mx-auto  ">
        <div className="xl:flex flex-col min-h-20  w-[250px]  bg-[#8cc9fa]  dark:bg-[#1e3e57] rounded-xl  hidden">
          <div className="flex">
            {" "}
            <Link to="/">
              {" "}
              <FaHome className="text-white mr-2 mt-2 text-xl " />
            </Link>
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
            <div className="flex items-center gap-x-2 text-white mt-3 py-2  w-full">
              <MdDashboard className="text-xl" />
              <NavLink to="/panel">داشبورد</NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaUserCircle className="text-xl" />
              <NavLink to="/panel/MyProfile"> ویرایش پروفایل</NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaBookOpen className="text-xl" />
              <NavLink to="/panel/MyCourses">دوره های من</NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaCalendarAlt className="text-xl" />
              <NavLink to="/panel/MyReservedCourses">
                دوره های رزرو شده{" "}
              </NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaHeart className="text-xl" />
              <NavLink to="/panel/MyFavoriteCourses">
                دوره های مورد علاقه{" "}
              </NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaRegNewspaper className="text-xl" />
              <NavLink to="/panel/MyFavoriteNews">خبر های مورد علاقه </NavLink>
            </div>

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaCommentAlt className="text-xl" />
              <NavLink to="/panel/MyCommentPage">کامنت های من </NavLink>
            </div>
            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaLock className="text-xl" />
              <NavLink to="/panel/ChangePassword">تغییر رمز عبور</NavLink>
            </div>

            {/* <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
              <FaComment className="text-xl" />
              <NavLink to="/panel/MyComments">نظرات ثبت شده</NavLink>
            </div> */}

            <div className="flex items-center gap-x-2 text-white mt-1 py-2  w-full">
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
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                      <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        آیا مطمئن هستید که می‌خواهید از حساب خود خارج شوید؟
                      </h2>
                      <div className="flex justify-end gap-4">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                          لغو
                        </button>
                        <button
                          onClick={handleLogout}
                          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
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

        <div className="w-full bg-gray-200 dark:bg-gray-900    md:rounded-xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { StudentLayout };
