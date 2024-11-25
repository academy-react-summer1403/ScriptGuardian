import React, { useEffect, useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import ReactPaginate from "react-paginate";
import { useMyFavoriteNews } from "../../../core/services/api/Panel/handelMyCourses";
import { ListPanel } from "../../../components/common/ListPanl/ListPanel";
import { StudentHamburger } from "../../../components/HamberGerStudentPanel/Studenthamburger";
import { CommonStudent } from "../../../components/HamberGerStudentPanel/CommonStudent";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ListFavoritePanel } from "../../../components/common/ListPanl/ListFavoritePanel";
import { ListFavoriteNews } from "../../../components/common/ListPanl/ListFavoriteNews";
const FavoriteNews = () => {
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

  const [pageSize, setPageSize] = useState(4);

  //API
  const { data, isPending } = useMyFavoriteNews();

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
  return (
    <>
      <div className="flex flex-col w-[95%]  dark:bg-gray-900 h-[400px] mt-5 overflow-hidden">
        <div className="flex lg:gap-x-[13.5%] items-center text-white h-[50px]  bg-[#69E5B8] dark:bg-[#145540]  w-full rounded-xl mb-2 md:text-base sm:text-sm text-xs lg:justify-start justify-around">
          <h2 className="mr-5 md:block hidden">تصویر</h2>
          <h2>تیتر </h2>
          <h2>تعداد بازدید</h2>
          <h2> امتیاز </h2>
          <h2>تعداد لایک</h2>
          <h2>مدیریت</h2>
        </div>

        {/* {currentItems &&
          currentItems?.map((item, index) => {
            return (
              <>
                <ListFavoriteNews
                  currentImageAddressTumb={item?.currentImageAddressTumb}
                  title={item?.title}
                  currentView={item?.currentView}
                  currentRate={item?.currentRate}
                  newsId={item?.newsId}
                  favoriteId={item?.favoriteId}
                />
              </>
            );
          })} */}

        {currentItems && currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <ListFavoriteNews
              key={index}
              currentImageAddressTumb={item?.currentImageAddressTumb}
              title={item?.title}
              currentView={item?.currentView}
              currentRate={item?.currentRate}
              newsId={item?.newsId}
              favoriteId={item?.favoriteId}
            />
          ))
        ) : (
          <p className="mx-auto mt-[130px] dark:text-white">
            خبر مورد علاقه‌ای وجود ندارد
          </p>
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
    </>
  );
};

export { FavoriteNews };
