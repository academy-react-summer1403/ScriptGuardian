import React, { useState } from "react";

const DropDownNews = ({ setSortingCol }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleSelect = (event) => {
    setSelectedFilter(event.target.value);
    setSortingCol(
      event.target.value && event.target.value != "all"
        ? event.target.value
        : undefined
    );
  };

  return (
    <div className="relative inline-block text-left h-full xl:hidden ml-2">
      <select
        value={selectedFilter}
        onChange={handleSelect}
        className="flex items-center justify-center max-w-[130px]    sm:max-w-none h-full rounded-md border border-gray-300 dark:border-gray-950 shadow-sm bg-white dark:bg-gray-900 dark:hover:bg-gray-950 text-gray-700 dark:text-gray-200 hover:bg-gray-50 py-[15px] focus:outline-none"
        aria-label="Sorting options"
      >
        <option
          value="all"
          className="text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950"
        >
          همه
        </option>
        <option
          value="currentRate"
          className="text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950"
        >
          محبوب‌ترین‌ها
        </option>
        <option
          value="currentView"
          className="text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950"
        >
          پربازدیدترین‌ها
        </option>
        <option
          value="updateDate"
          className="text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950"
        >
          جدیدترین‌ها
        </option>
      </select>
    </div>
  );
};

export { DropDownNews };
