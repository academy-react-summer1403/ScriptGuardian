import React, { useEffect, useState } from "react";

const FilterNews = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    const savedIndex = localStorage.getItem("activeIndex");
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex));
    }
  }, []);

  const handleActive = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
  };
  return (
    <div className="w-[526px] h-[56px] rounded-[16px] border mr-[32px] shadow-Second-shadow xl:flex bg-white dark:bg-gray-900 dark:border-gray-950 items-center hidden">
      <div
        className={`h-[40px] text-white rounded-[12px] mr-2 flex justify-center items-center px-6 ${
          activeIndex === 0
            ? "bg-[#2196F3] dark:bg-[#1565C0]"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
        onClick={() => handleActive(0)}
      >
        همه
      </div>
      <div
        className={`h-[40px] text-white rounded-[12px] mr-2 flex justify-center items-center px-6 ${
          activeIndex === 1
            ? "bg-[#2196F3] dark:bg-[#1565C0]"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
        onClick={() => handleActive(1)}
      >
        محبوب‌ترین‌ها
      </div>
      <div
        className={`h-[40px] text-white rounded-[12px] mr-2 flex justify-center items-center px-6 ${
          activeIndex === 2
            ? "bg-[#2196F3] dark:bg-[#1565C0]"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
        onClick={() => handleActive(2)}
      >
        پربازدیدترین‌ها
      </div>
      <div
        className={`h-[40px] text-white rounded-[12px] mr-2 flex justify-center items-center px-6 ${
          activeIndex === 3
            ? "bg-[#2196F3] dark:bg-[#1565C0]"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
        onClick={() => handleActive(3)}
      >
        جدیدترین‌ها
      </div>
    </div>
  );
};

export { FilterNews };
