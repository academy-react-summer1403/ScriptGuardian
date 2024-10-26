import React, { useEffect, useState } from "react";

import { ThemeCourses } from "./ThemeCourses";
import { SearchCourses } from "./SearchCourses";
import { DropDownCourses } from "./DropDownCourses";
import { FaFilter } from "react-icons/fa";

const SearchAndThemeCourses = ({handleClick}) => {
  const [showContent, setShowContent] = useState(false);

  const handleFilter = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="flex  sm:gap-4 gap-[1.5%]  lg:mr-0 mr-3 ">
      <div
        onClick={handleClick}
        className="sm:w-[50px] w-[40px] h-full lg:hidden bg-[#ECEFF1] dark:bg-[#1C1C1C] rounded-2xl  focus:outline-none flex items-center justify-center ease-in-out"
      >
            <FaFilter className="dark:text-white text-gray-900 md:text-base sm:text-sm text-xs"/>
      </div>

      <ThemeCourses />
      <SearchCourses />
      <DropDownCourses />
    </div>
  );
};

export { SearchAndThemeCourses };
