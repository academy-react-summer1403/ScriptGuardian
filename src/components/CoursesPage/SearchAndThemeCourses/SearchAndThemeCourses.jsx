import React, { useEffect, useState } from "react";

import { ThemeCourses } from "./ThemeCourses";
import { SearchCourses } from "./SearchCourses";
import { DropDownCourses } from "./DropDownCourses";

const SearchAndThemeCourses = () => {
  return (
    <div className="flex h-[56px] gap-4">
      <ThemeCourses />
      <SearchCourses />
      <DropDownCourses />
    </div>
  );
};

export { SearchAndThemeCourses };
