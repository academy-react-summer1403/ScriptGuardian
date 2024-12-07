import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SearchNews } from "./SearchNews";
import { FilterNews } from "./FilterNews";
import { DropDownNews } from "./DropDownNews";

const NewsSearchAndFilter = ({
  handleSearchChange,
  searchQuery,
  setSortingCol,
}) => {
  return (
    <>
      <div className="flex xl:mt-0 xl:mx-0 mt-20 xl:justify-between sm:justify-between justify-between  xl:w-auto w-[91%]   mx-auto  sm:flex-nowrap flex-wrap ">
        <SearchNews
          handleSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        />

        {/* Filter */}
        <FilterNews setSortingCol={setSortingCol} />

        {/* DropDOwn */}
        <DropDownNews setSortingCol={setSortingCol} />
      </div>
    </>
  );
};

export { NewsSearchAndFilter };
