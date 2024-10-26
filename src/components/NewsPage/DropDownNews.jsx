import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DropDownNews = () => {
  // DropDown
  const getInitialFilter = () => {
    const savedFilter = localStorage.getItem("selectedFilter");
    return savedFilter ? savedFilter : "همه";
  };

  const [selectedFilter, setSelectedFilter] = useState(getInitialFilter);

  const [isOpen, setIsOpen] = useState(false); // کنترل باز و بسته بودن منو

  // ذخیره کردن مقدار انتخاب شده در Local Storage هر بار که تغییر کند
  useEffect(() => {
    localStorage.setItem("selectedFilter", selectedFilter);
  }, [selectedFilter]);

  const handleSelect = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // تغییر وضعیت باز/بسته بودن منو
  };
  return (
    <div className="relative inline-block text-left h-full xl:hidden ml-2">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-[130px] h-full rounded-md border border-gray-300 dark:border-gray-950 shadow-sm  bg-white dark:bg-gray-900 dark:hover:bg-gray-950  text-gray-700 hover:bg-gray-50 py-[15px] focus:outline-none"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen} // تغییر وضعیت aria-expanded
      >
        <p className="min-w-[100px] text-[#263238] dark:text-gray-200">
          {" "}
          {selectedFilter}
        </p>

        <span>
          {isOpen ? (
            <FaChevronDown className="text-[#263238] dark:text-white" />
          ) : (
            <FaChevronUp className="text-[#263238] dark:text-white" />
          )}
        </span>
      </button>

      {isOpen && (
        <div
          className=" absolute right-0 mt-2  rounded-2xl dark:bg-gray-900 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-full  flex flex-col items-start"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            onClick={() => handleSelect("همه")}
            className="block text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 dark:bg-gray-900 dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-gray-900 w-full   px-4 py-2 rounded-t-2xl"
            role="menuitem"
          >
            همه{" "}
          </button>
          <button
            onClick={() => handleSelect("محبوب‌ترین‌ها")}
            className=" block text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 dark:bg-gray-900 dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-gray-900 w-full  px-4 py-2 "
            role="menuitem"
          >
            محبوب‌ترین‌ها
          </button>
          <button
            onClick={() => handleSelect("پربازدیدترین‌ها")}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 dark:bg-gray-900 dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-gray-900 w-full "
            role="menuitem"
          >
            پربازدیدترین‌ها
          </button>
          <button
            onClick={() => handleSelect("جدیدترین‌ها")}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 dark:bg-gray-900 dark:hover:bg-gray-950 hover:bg-gray-100 hover:text-gray-900 w-full rounded-b-2xl "
            role="menuitem"
          >
            جدیدترین‌ها
          </button>
        </div>
      )}
    </div>
  );
};

export { DropDownNews };
