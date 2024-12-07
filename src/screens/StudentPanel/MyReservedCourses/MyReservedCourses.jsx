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
import { convertIsoToJalali } from "../../../core/utils/dateUtils";
import { CustomSpinner } from "../../../components/animation/CustomSpinner";
import { convertEnToPe } from "persian-number";

const MyReservedCourses = () => {
  const queryClient = useQueryClient();

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
  }, [itemOffset, pageSize, data]);

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

  //style
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
          title={"دوره های رزرو شده ی من"}
        />

        <div className="flex flex-col w-[95%]   h-[400px] mt-5 overflow-hidden">
          <div className="flex  items-center text-white h-[50px] bg-[#69E5B8] dark:bg-[#145540] w-full rounded-xl mb-2 md:text-base sm:text-sm text-xs  justify-between">
            <h2 className="mr-5 w-[160px]">نام دوره</h2>
            <h2 className="ml-5 w-[80px]">تاریخ رزرو</h2>
            <h2 className="ml-5 w-[90px]">وضعیت</h2>
          </div>

          {/* {currentItems &&
            currentItems?.map((item, index) => {
              return (
                <>
                  <div
                    className="flex items-center text-white h-[50px] bg-[#8cc9fa] dark:bg-[#1e3e57]  w-full rounded-xl mb-2 sm:text-base md:text-base  text-[10px] justify-between"
                    key={index}
                  >
                    <div className="mr-5 min-w-[150px] ">
                      {item?.courseName}
                    </div>
                    <div className="ml-[110px]">
                      <strong>
                        {item?.reserverDate &&
                          convertIsoToJalali(item?.reserverDate)}
                      </strong>
                    </div>
                    {item?.accept ? (
                      <div className="ml-5 gap-2 flex items-center">
                        <p
                          className="text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900 rounded-md sm:text-xs  sm:px-2 "
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
            })} */}

          {!currentItems ? (
            <CustomSpinner style={loaderStyle} />
          ) : currentItems.length === 0 ? (
            <p className="text-center text-gray-700 dark:text-gray-200 mx-auto mt-[150px]">
              رزروی یافت نشد
            </p>
          ) : (
            <>
              {currentItems?.map((item, index) => (
                <div
                  className="flex items-center text-white h-[50px] bg-[#8cc9fa] dark:bg-[#1e3e57]  w-full rounded-xl mb-2 sm:text-base md:text-base  text-[10px] justify-between"
                  key={index}
                >
                  <div className="mr-5 w-[160px] ">
                    <span>
                      {item?.courseName && item.courseName.length > 15
                        ? `${item.courseName.substring(0, 15)}...`
                        : item?.courseName}
                    </span>
                  </div>
                  <div className=" ml-5 w-[80px]">
                    <strong>
                      {item?.reserverDate &&
                        convertEnToPe(convertIsoToJalali(item?.reserverDate))}
                    </strong>
                  </div>
                  {item?.accept ? (
                    <div className="ml-5 gap-2 w-[90px] flex items-center ">
                      <p
                        className="text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900 rounded-md sm:text-xs  sm:px-2 "
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
                    </div>
                  ) : (
                    <div className="  ml-5  w-[90px] flex items-center  justify-end gap-x-4">
                      <FaTrash
                        className="text-red-600 cursor-pointer "
                        onClick={() => handelDelete(item?.reserveId)}
                      />
                      <FaEye
                        className="cursor-pointer  block ml-1"
                        onClick={() => {
                          navigate(
                            `/courses/${
                              item?.courseId ? item.courseId : "no id"
                            }`
                          );
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
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
