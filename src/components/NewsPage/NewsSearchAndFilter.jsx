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
      <div className="flex xl:mt-0 mt-10 justify-between">
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
