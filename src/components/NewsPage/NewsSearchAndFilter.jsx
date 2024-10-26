import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SearchNews } from "./SearchNews";
import { FilterNews } from "./FilterNews";
import { DropDownNews } from "./DropDownNews";

const NewsSearchAndFilter = () => {



  return (
    <>
      <div className="flex xl:mt-0 mt-10 justify-between">
        <SearchNews/>

        {/* Filter */}
        <FilterNews/>


        {/* DropDOwn */}
        <DropDownNews/>

      </div>
    </>
  );
};

export { NewsSearchAndFilter };
