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
import { useMyCourses } from "../../../core/services/api/Panel/handelMyCourses";
import { ListPanel } from "../../../components/common/ListPanl/ListPanel";
const MyCourses = () => {
  const navigate = useNavigate();
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

  //dropdown

  const [pageSize, setPageSize] = useState(2);

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setItemOffset(0);
    console.log("Page Size:", event.target.value);
  };

  //API
  const { data, isPending } = useMyCourses();

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
            <h2 className="text-[20px] mr-2 text-[#263238] dark:text-gray-200">
              {" "}
              دوره های من
            </h2>
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

        <div className="flex  justify-between w-[95%]  mt-5">
          {/* Search */}
          {/* <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-md p-2 shadow-md  sm:w-[90%] w-[80%]">
            <input
              type="text"
              placeholder="جستجو کنید..."
              className="bg-transparent outline-none text-gray-700 dark:placeholder:text-white w-full px-2"
            />
            <button className="text-gray-500 hover:text-gray-700 transition-colors duration-150">
              <FiSearch size={20} className="dark:text-white" />
            </button>
          </div> */}

          <div className="relative z-0 shadow-Second-shadow   flex items-center  sm:w-[90%] w-[80%] h-[40px]   bg-gray-100 dark:bg-gray-800 rounded-md   ">
            <input
              type="text"
              className="w-full sm:px-[20px] xl:py-0  h-full border-gray-300 sm:rounded-[16px] focus:outline-none dark:caret-white dark:placeholder-white   z-0 sm:placeholder:text-base placeholder:text-[10px] pr-3 bg-gray-100 dark:bg-gray-800 "
              placeholder="جستجو کنید..."
              // value={searchQuery ? searchQuery : ""}
              // onChange={handleSearchChange}
            />

            <span className="flex items-center ">
              <svg
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute sm:left-3 left-1 sm:w-[24px] sm:h-[25px] w-[14px] h-[15px] text-gray-500"
              >
                <path
                  opacity="0.4"
                  d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                  fill="#2196F3"
                />
                <path
                  d="M21.3001 22.5001C21.1201 22.5001 20.9401 22.4301 20.8101 22.3001L18.9501 20.4401C18.6801 20.1701 18.6801 19.7301 18.9501 19.4501C19.2201 19.1801 19.6601 19.1801 19.9401 19.4501L21.8001 21.3101C22.0701 21.5801 22.0701 22.0201 21.8001 22.3001C21.6601 22.4301 21.4801 22.5001 21.3001 22.5001Z"
                  fill="#2196F3"
                />
              </svg>
            </span>
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
          <div className="flex lg:gap-x-[13.5%] items-center text-white h-[50px] bg-purple-700 dark:bg-purple-900 w-full rounded-xl mb-2 md:text-base sm:text-sm text-xs lg:justify-start justify-around">
            <h2 className="mr-5 md:block hidden">تصویر</h2>
            <h2>نام دوره</h2>
            <h2>مدرس</h2>
            <h2> آخرین آپدیت</h2>
            <h2>قیمت</h2>
            <h2>مدیریت</h2>
          </div>

          {currentItems &&
            currentItems?.map((item, index) => {
              return (
                <>
                  <ListPanel
                    key={index}
                    tumbImageAddress={item.tumbImageAddress}
                    courseTitle={item.courseTitle}
                    fullName={item.fullName}
                    cost={item.cost}
                    courseId={item.courseId}
                    lastUpdate={item?.lastUpdate}
                  />
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

export { MyCourses };
