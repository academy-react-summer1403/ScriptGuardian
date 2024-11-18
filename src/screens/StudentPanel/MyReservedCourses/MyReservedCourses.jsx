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
const MyReservedCourses = () => {
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

  // ایجاد state برای ذخیره مقدار انتخاب شده
  const [pageSize, setPageSize] = useState(2); // مقدار پیش‌فرض

  // تابع برای به‌روزرسانی مقدار انتخاب شده
  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setItemOffset(0); // شروع از اول لیست بعد از تغییر سایز صفحه
    console.log("Page Size:", event.target.value); // مقدار جدید در کنسول
  };

  //API
  const { data, isPending } = useMyReservedCourses();
  console.log(data, "this data of course is pending now now");

  // page data

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  React.useEffect(() => {
    const endOffset = itemOffset + pageSize;
    setCurrentItems(data && data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / pageSize));
  }, [itemOffset, pageSize, data]); // اضافه کردن pageSize به وابستگی‌ها

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageSize) % data?.length;
    setItemOffset(newOffset);
  };

  //API DELETE RESERVE

  const { mutate: DeleteReserve } = useDeleteMyReservedCourses();

  const handelDelete = (id) => {
    DeleteReserve(id, {
      onSuccess: () => {
        queryClient.invalidateQueries("MyReservedCourses");
        toast.success("با موفقیت دوره رزرو شده ی شما حذف شد");
      },
    });
    // alert(id)
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
          title={"دوره های رزرو شده ی من"}
        />

        {/* Unic */}
        <div className="flex  justify-between w-[95%]  mt-5">
          {/* Search */}
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-md p-2 shadow-md  sm:w-[90%] w-[80%]">
            <input
              type="text"
              placeholder="جستجو کنید..."
              className="bg-transparent outline-none text-gray-700 dark:placeholder:text-white w-full px-2"
            />
            <button className="text-gray-500 hover:text-gray-700 transition-colors duration-150">
              <FiSearch size={20} className="dark:text-white" />
            </button>
          </div>

          {/* DropDown */}
          <div className="flex items-center sm:w-[8%] w-[13%] sm:max-w-none max-w-[60px] relative ">
            <FiChevronDown
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-200 md:text-base sm:text-sm text-xs `}
            />

            <select
              id="pageSize"
              className="bg-gray-100 dark:bg-gray-800 rounded-md w-full h-full text-gray-700 dark:text-gray-100 outline-none text-center appearance-none md:pr-8 pr-4 md:text-base sm:text-sm text-xs "
              value={pageSize} // مقدار انتخاب شده
              onChange={handlePageSizeChange}
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-[95%] bg-white dark:bg-gray-900 h-[400px] mt-5 overflow-hidden">
          <div className="flex  items-center text-white h-[50px] bg-purple-700 dark:bg-purple-900 w-full rounded-xl mb-2 md:text-base sm:text-sm text-xs  justify-between">
            <h2 className="mr-5">نام دوره</h2>
            <h2 className="ml-5">تاریخ رزرو</h2>
            <h2 className="ml-5">وضعیت</h2>
          </div>

          {currentItems &&
            currentItems?.map((item, index) => {
              return (
                <>
                  <div
                    className="flex items-center text-white h-[50px] bg-purple-400 dark:bg-purple-600 w-full rounded-xl mb-2 sm:text-base md:text-base  text-[10px] justify-between"
                    key={index}
                  >
                    <div className="mr-5 min-w-[150px] ">
                      {item?.courseName}
                    </div>
                    <div className="ml-[110px]">
                      {item?.reserverDate ? item?.reserverDate : ""}
                    </div>
                    {item?.accept ? (
                      <div className="ml-5 gap-1 flex items-center">
                        <FaEye
                          className="cursor-pointer"
                          onClick={() => {
                            navigate(
                              `/courses/${
                                item?.courseId ? item.courseId : "no id"
                              }`
                            );
                          }}
                        />
                        <p
                          className="text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900 rounded-md text-xs  "
                          onClick={() => {
                            navigate(
                              `/courses/${
                                item?.courseId ? item.courseId : "no id"
                              }`
                            );
                          }}
                        >
                          تایید شده
                        </p>
                      </div>
                    ) : (
                      <div className="ml-5 gap-1 flex">
                        <FaEye
                          className="cursor-pointer"
                          onClick={() => {
                            navigate(
                              `/courses/${
                                item?.courseId ? item.courseId : "no id"
                              }`
                            );
                          }}
                        />
                        <FaTrash
                          className="text-red-600"
                          onClick={() => handelDelete(item?.reserveId)}
                        />
                      </div>
                    )}
                  </div>
                </>
              );
            })}
        </div>

        <div className="flex justify-center mb-5">
          <ReactPaginate
            breakLabel="..."
            nextLabel=<div className="w-[32px] h-[32px] bg-[#ECEFF1] dark:bg-[#37474F] rounded-full flex items-center justify-center ">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0333 13.2802L5.68667 8.93355C5.17333 8.42021 5.17333 7.58022 5.68667 7.06688L10.0333 2.72021"
                    className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel=<div className="w-[32px] h-[32px] bg-[#2196F3] dark:bg-[#1565C0]  rounded-full flex items-center justify-center">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.96666 2.71978L10.3133 7.06645C10.8267 7.57978 10.8267 8.41978 10.3133 8.93312L5.96666 13.2798"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            activeClassName={
              "w-[32px] h-[32px] bg-[#2196F3] dark:bg-[#1565C0] rounded-full flex items-center justify-center text-white "
            }
            className="flex gap-5 mt-[48px] justify-center items-center text-[#263238] dark:text-gray-300"
          />
        </div>
      </div>
    </>
  );
};

export { MyReservedCourses };
