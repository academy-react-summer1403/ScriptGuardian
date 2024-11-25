import React, { useEffect, useState } from "react";

import { ThemeCourses } from "./ThemeCourses";
import { SearchCourses } from "./SearchCourses";
import { DropDownCourses } from "./DropDownCourses";
import { FaFilter } from "react-icons/fa";

const SearchAndThemeCourses = ({
  handleClick,
  handleSearchChange,
  searchQuery,
  setSortingCol,
}) => {
  const [showContent, setShowContent] = useState(false);

  const handleFilter = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="flex sm:flex-nowrap sm:flex-row sm:w-auto flex-row flex-wrap w-[90%] sm:gap-4 gap-5 sm:items-start items-center lg:mr-0  md:mr-[65px] sm:mr-8 mr-3 sm:mt-0 mt-10  sm:mb-0 mb-0 sm:gap-y-0  gap-y-5 sm:justify-start  justify-around">
      <div
        onClick={handleClick}
        className="w-[50px]  sm:h-full h-[50px] lg:hidden bg-[#ECEFF1] dark:bg-[#1C1C1C] rounded-2xl  focus:outline-none flex items-center justify-center ease-in-out cursor-pointer sm:order-none order-2"
      >
        <FaFilter className="dark:text-white text-gray-900 md:text-base sm:text-sm text-xs" />
      </div>

      <ThemeCourses />
      <SearchCourses
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />
      <DropDownCourses setSortingCol={setSortingCol} />
    </div>
  );
};

export { SearchAndThemeCourses };
