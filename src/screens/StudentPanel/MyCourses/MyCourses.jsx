import React, { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaComment,
  FaHome,
  FaLock,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userProfile from "../../.././images/StudentPanel/NavStudent/images.png";
import { FiChevronDown } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useMyCourses } from "../../../core/services/api/Panel/handelMyCourses";
import { ListPanel } from "../../../components/common/ListPanl/ListPanel";
import { Search } from "../../../components/common/Search/Search";
import { CustomSpinner } from "../../../components/animation/CustomSpinner";
import { CommonStudent } from "../../../components/HamberGerStudentPanel/CommonStudent";
import { StudentHamburger } from "../../../components/HamberGerStudentPanel/Studenthamburger";
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

  const [pageSize, setPageSize] = useState(6);

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setItemOffset(0);
    console.log("Page Size:", event.target.value);
  };

  const [currentPage, setCurrentPage] = useState(0);

  const [searchQuery, setSearchQuery] = useState(undefined);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(undefined);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  //API
  const { data: Data, isPending } = useMyCourses({
    PageNumber: currentPage + 1,
    RowsOfPage: pageSize,
    SearchQuery: debouncedSearchQuery,
  });

  const data = Data && Data.listOfMyCourses;
  const Total = Data && Data?.totalCount;

  React.useEffect(() => {
    const endOffset = itemOffset + pageSize;
    setCurrentItems(data && data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Total / pageSize));
  }, [itemOffset, pageSize, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageSize) % data?.length;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  //Search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };

  //Style

  const loaderStyle = "flex justify-center items-center mx-auto mt-[100px]";

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
          title={"دوره های من"}
        />
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

          <Search
            handleSearchChange={handleSearchChange}
            searchQuery={searchQuery}
          />

          {/* DropDown */}
          <div className="flex items-center sm:w-[8%] w-[13%] sm:max-w-none max-w-[60px] relative ">
            <FiChevronDown
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-200 md:text-base sm:text-sm text-xs dark:text-white`}
            />

            <select
              id="pageSize"
              className="bg-white dark:bg-gray-800 rounded-md w-full h-full text-gray-700 dark:text-gray-100 outline-none text-center appearance-none md:pr-8 pr-4 md:text-base sm:text-sm text-xs "
              value={pageSize} // مقدار انتخاب شده
              onChange={handlePageSizeChange}
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-[95%]  dark:bg-gray-900 h-[400px] mt-5 overflow-hidden">
          <div className="flex  items-center text-white h-[50px] bg-[#69E5B8] dark:bg-[#145540] w-full rounded-xl mb-2 md:text-base sm:text-sm text-xs justify-around">
            <h2 className="w-[70px] lg:block hidden"> تصویر دوره </h2>
            <h2 className="w-[100px]">نام دوره</h2>
            <h2 className="w-[80px] sm:block hidden ">مدرس</h2>
            <h2 className="w-[80px] md:block hidden"> آخرین آپدیت</h2>
            <h2 className="w-[80px]">قیمت</h2>
            <h2 className="w-[102px]">وضعیت پرداخت</h2>
            <h2 className="w-[50px]">مدیریت</h2>
          </div>

          {/* <CustomSpinner /> */}

          {!currentItems ? (
            <CustomSpinner style={loaderStyle} />
          ) : currentItems.length === 0 ? (
            <p className="text-center text-gray-700 dark:text-gray-200 mx-auto mt-[150px]">
              داده‌ای یافت نشد
            </p>
          ) : (
            <>
              {currentItems?.map((item, index) => (
                <ListPanel
                  key={index}
                  tumbImageAddress={item.tumbImageAddress}
                  courseTitle={item.courseTitle}
                  fullName={item.fullName}
                  cost={item.cost}
                  courseId={item.courseId}
                  lastUpdate={item?.lastUpdate}
                  paymentStatus={item?.paymentStatus}
                />
              ))}
            </>
          )}
          {/* {currentItems &&
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
            })} */}
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
