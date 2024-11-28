import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useMyFavoriteCourses } from "../../../core/services/api/Panel/handelMyCourses";
import { useQueryClient } from "@tanstack/react-query";
import { ListFavoritePanel } from "../../../components/common/ListPanl/ListFavoritePanel";
import { CustomSpinner } from "../../../components/animation/CustomSpinner";

const FavoriteCourse = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [pageSize, setPageSize] = useState(6);

  //API
  const { data, isPending } = useMyFavoriteCourses();
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

  //style

  const loaderStyle = "flex justify-center items-center mx-auto mt-[100px]";

  return (
    <>
      <div className="flex flex-col w-[95%]  dark:bg-gray-900 h-[400px] mt-5 overflow-hidden">
        <div className="flex lg:gap-x-[13.5%] items-center text-white h-[50px] bg-[#69E5B8] dark:bg-[#145540]  w-full rounded-xl mb-2 md:text-base sm:text-sm text-xs lg:justify-start justify-around">
          <h2 className="mr-5 md:block hidden">تصویر</h2>
          <h2>نام دوره</h2>
          <h2 className="sm:block hidden">وضعیت</h2>
          <h2> آخرین آپدیت</h2>
          <h2>سطح</h2>
          <h2>مدیریت</h2>
        </div>
{/* 
        {currentItems &&
          currentItems?.map((item, index) => {
            return (
              <>
                <ListFavoritePanel
                  key={index}
                  tumbImageAddress={item?.tumbImageAddress}
                  courseTitle={item?.courseTitle}
                  typeName={item?.typeName}
                  levelName={item?.levelName}
                  courseId={item?.courseId}
                  favoriteId={item?.favoriteId}
                  lastUpdate={item?.lastUpdate}
                />
              </>
            );
          })} */}

        {!currentItems ? (
          <CustomSpinner style={loaderStyle} />
        ) : currentItems.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-200 mx-auto mt-[150px]">
            دوره مورد علاقه‌ای وجود ندارد
          </p>
        ) : (
          <>
            {currentItems &&
              currentItems?.map((item, index) => {
                return (
                  <>
                    <ListFavoritePanel
                      key={index}
                      tumbImageAddress={item?.tumbImageAddress}
                      courseTitle={item?.courseTitle}
                      typeName={item?.typeName}
                      levelName={item?.levelName}
                      courseId={item?.courseId}
                      favoriteId={item?.favoriteId}
                      lastUpdate={item?.lastUpdate}
                    />
                  </>
                );
              })}
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
    </>
  );
};

export { FavoriteCourse };
