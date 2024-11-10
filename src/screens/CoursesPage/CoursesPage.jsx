// import React, { useEffect, useState } from "react";
// import { HereSectionCourses } from "../../components/CoursesPage/HeroSectionCourses/HereSectionCourses";

// import { Filters } from "../../components/CoursesPage/FilterComponents/Filters";
// import { SearchAndThemeCourses } from "../../components/CoursesPage/SearchAndThemeCourses/SearchAndThemeCourses";
// import { LandingCourses } from "../../components/LandingComponents/OurCourses/LandingCourses";
// const CoursesPage = () => {

//   const [map, setMap] = useState([
//     {id : 1},
//     {id : 2},
//     {id : 3},
//     {id : 4},
//     {id : 5},
//     {id : 6},
//     {id : 7},
//     {id : 8},
//     {id : 9},
//   ]);

//   return (
//     <>
//       <HereSectionCourses />
//       <div className="mt-10 flex container mx-auto gap-8">
//         <Filters />
//         <div className="flex flex-col ">
//           {/* Top */}
//           <SearchAndThemeCourses />
//           <div className="w-[952px] min-h-[200px] mt-[32px]  flex flex-wrap gap-8">
//           {map.map((course?, index) => (
//             <LandingCourses key={index} />
//           ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export { CoursesPage };

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { HereSectionCourses } from "../../components/CoursesPage/HeroSectionCourses/HereSectionCourses";
import { Filters } from "../../components/CoursesPage/FilterComponents/Filters";
import { SearchAndThemeCourses } from "../../components/CoursesPage/SearchAndThemeCourses/SearchAndThemeCourses";
// import { LandingCourses } from "../../components/LandingComponents/OurCourses/LandingCourses";
import { CoursesCard } from "../../components/CoursesPage/CourseCard/CourseCard";
import { Course } from "../../components/LandingComponents/OurCourses/Course";
import { useCourses } from "../../core/services/api/CoursesPage/GetAllCourses";

const CoursesPage = () => {
  //API

  const [searchQuery, setSearchQuery] = useState(undefined);

  const { data } = useCourses({
    SearchQuery: searchQuery,
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // به‌روزرسانی searchQuery با مقدار ورودی
  };
  console.log(data, "CoursesPage");

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  //Filter in md

  const [showMenu, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showMenu);
  };

  const style =
    "w-[296px] h-[389px] flex flex-col bg-white dark:bg-gray-900 rounded-[24px] shadow-ّFirst-shadow text-[#263238] dark:text-white last:mb-5 ";
  return (
    <>
      {/* TODO */}
      <HereSectionCourses />
      <div className="mt-10 flex xl:w-[1280px]  container lg:justify-start   sm:mx-auto lg:gap-8  justify-center">
        <Filters showMenu={showMenu} handleClick={handleClick} />
        <div className="flex flex-col sm:items-start items-center   ">
          {/* Top */}
          <SearchAndThemeCourses
            handleClick={handleClick}
            handleSearchChange={handleSearchChange}
            searchQuery={searchQuery}
          />
          <div className="xl:w-[952px] lg:w-[722px] sm:w-auto     min-h-[231px] mt-[32px] flex flex-wrap  lg:gap-8 md:gap-x-[14.3%] gap-x-[5%]  gap-y-8 sm:mr-3  w-full sm:justify-start justify-center ">
            {currentItems?.map((course, index) => (
              <Course
                style={style}
                key={index}
                courseId={course?.courseId}
                teacherName={course?.teacherName}
                cost={course?.cost}
                likeCount={course?.likeCount}
                dissLikeCount={course?.dissLikeCount}
                userIsLiked={course?.userIsLiked}
                title={course?.title}
                describe={course?.describe}
                isUserFavorite={course?.userFavorite}
                userLikeId={course?.userLikedId}
                userIsDissLiked={course?.currentUserDissLike}
                userFavoriteId={course?.userFavoriteId}
                tumbImageAddress={course?.tumbImageAddress}
              />
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex w-full justify-center">
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
      </div>
    </>
  );
};

export { CoursesPage };
