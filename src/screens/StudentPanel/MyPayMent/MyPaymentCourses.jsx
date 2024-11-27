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
import {
  useMyCourses,
  useMyPaymentCourses,
} from "../../../core/services/api/Panel/handelMyCourses";
import { ListPanel } from "../../../components/common/ListPanl/ListPanel";
import { Search } from "../../../components/common/Search/Search";
import { CustomSpinner } from "../../../components/animation/CustomSpinner";
import { CommonStudent } from "../../../components/HamberGerStudentPanel/CommonStudent";
import { StudentHamburger } from "../../../components/HamberGerStudentPanel/Studenthamburger";
import { ListPayment } from "../../../components/common/ListPanl/ListPayment";
const MyPaymentCourses = () => {
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
  const { data, isPending } = useMyPaymentCourses();

  React.useEffect(() => {
    const endOffset = itemOffset + pageSize;
    setCurrentItems(data && data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data / pageSize));
  }, [itemOffset, pageSize, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageSize) % data && data?.length;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
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
          title={"پرداخت های من"}
        />
        {/* Unic */}

        <div className="flex flex-col w-[95%]  dark:bg-gray-900 h-[400px] mt-5 overflow-hidden">
          <div className="flex  items-center text-white h-[50px] bg-[#69E5B8] dark:bg-[#145540] w-full rounded-xl mb-2 md:text-base sm:text-sm text-xs justify-around ">
            <h2 className="sm:text-base text-[8px]">تا الان پرداخت شد</h2>
            <h2 className="lg:block hidden ">تاریخ پرداخت</h2>
            <h2 className="lg:block hidden">تاریخ شروع</h2>
            <h2 className="sm:text-base text-[8px]">تصویر آخرین پرداخت</h2>
            <h2 className="sm:text-base text-[8px]">وضعیت آخرین پرداخت</h2>
            <h2 className="sm:text-base text-[8px]">مدیریت</h2>
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
                <ListPayment
                  key={index}
                  paid={item?.paid}
                  peymentDate={item?.peymentDate}
                  paymentInvoiceImage={item?.paymentInvoiceImage}
                  insertDate={item?.insertDate}
                  groupName={item?.groupName}
                  PaymentId={item?.paymentId}
                  accept={item?.accept}
                  courseId={item?.courseId}
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

export { MyPaymentCourses };
