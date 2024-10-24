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
//           {map.map((course, index) => (
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
import { LandingCourses } from "../../components/LandingComponents/OurCourses/LandingCourses";

const CoursesPage = () => {
  const [map, setMap] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ]);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(map.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(map.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, map]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % map.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <HereSectionCourses />
      <div className="mt-10 flex xl:w-[1280px] container mx-auto gap-8 ">
        <Filters />
        <div className="flex flex-col ">
          {/* Top */}
          <SearchAndThemeCourses />
          <div className="w-[952px] min-h-[1231px] mt-[32px] flex flex-wrap gap-8">
            {currentItems.map((course, index) => (
              <LandingCourses key={course.id} id={course.id} />
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center">
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
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              activeClassName={"w-[32px] h-[32px] bg-[#2196F3] dark:bg-[#1565C0] rounded-full flex items-center justify-center text-white "}
              className="flex gap-5 mt-[48px] justify-center items-center text-[#263238] dark:text-gray-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { CoursesPage };
