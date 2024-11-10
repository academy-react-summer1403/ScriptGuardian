import React, { useEffect, useState } from "react";

import { ThemeCourses } from "./ThemeCourses";
import { SearchCourses } from "./SearchCourses";
import { DropDownCourses } from "./DropDownCourses";
import { FaFilter } from "react-icons/fa";

const SearchAndThemeCourses = ({
  handleClick,
  handleSearchChange,
  searchQuery,
}) => {
  const [showContent, setShowContent] = useState(false);

  const handleFilter = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="flex sm:flex-nowrap sm:flex-row flex-col  sm:gap-4 gap-5 sm:items-start items-center lg:mr-0 mr-3 sm:mt-0 mt-10  sm:mb-0 mb-20 sm:gap-y-0  gap-y-5 ">
      <div
        onClick={handleClick}
        className="sm:w-[50px] w-full sm:h-full h-[50px] lg:hidden bg-[#ECEFF1] dark:bg-[#1C1C1C] rounded-2xl  focus:outline-none flex items-center justify-center ease-in-out cursor-pointer "
      >
        <FaFilter className="dark:text-white text-gray-900 md:text-base sm:text-sm text-xs" />
      </div>

      <ThemeCourses />
      <SearchCourses
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />
      <DropDownCourses />
    </div>
  );
};

export { SearchAndThemeCourses };
