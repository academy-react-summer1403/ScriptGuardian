import React, { useEffect, useState } from "react";

const FilterNews = ({ setSortingCol }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = ({ index, value }) => {
    setActiveIndex(index);
    setSortingCol(value && value != "all" ? value : undefined);
  };
  return (
    <div className="w-[526px] h-[56px] rounded-[16px] border mr-[32px] shadow-Second-shadow xl:flex bg-white dark:bg-gray-900 dark:border-gray-950 items-center hidden">
      <div
        className={`h-[40px] text-white rounded-[12px] mr-2 flex justify-center items-center px-6 cursor-pointer ${
          activeIndex === 0
            ? "bg-[#2196F3] dark:bg-[#1565C0]"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
        onClick={() => handleActive({ index: 0, value: "all" })}
      >
        همه
      </div>
      <div
        className={`h-[40px] text-white rounded-[12px] mr-2 flex justify-center items-center cursor-pointer px-6 ${
          activeIndex === 1
            ? "bg-[#2196F3] dark:bg-[#1565C0]"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
        onClick={() => handleActive({ index: 1, value: "currentRate" })}
      >
        محبوب‌ترین‌ها
      </div>
      <div
        className={`h-[40px] text-white rounded-[12px] mr-2 flex justify-center items-center cursor-pointer px-6 ${
          activeIndex === 2
            ? "bg-[#2196F3] dark:bg-[#1565C0]"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
        onClick={() => handleActive({ index: 2, value: "currentView" })}
      >
        پربازدیدترین‌ها
      </div>
      <div
        className={`h-[40px] text-white rounded-[12px] mr-2 flex justify-center items-center cursor-pointer px-6 ${
          activeIndex === 3
            ? "bg-[#2196F3] dark:bg-[#1565C0]"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
        onClick={() => handleActive({ index: 3, value: "updateDate" })}
      >
        جدیدترین‌ها
      </div>
    </div>
  );
};

export { FilterNews };
