import React, { useEffect, useState } from "react";
const DarkButton = () => {
  // وضعیت اولیه دارک مود بر اساس localStorage
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // مدیریت تغییر کلاس بر روی body و ذخیره‌سازی حالت در localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // تغییر حالت دارک مود هنگام کلیک
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="xl:w-[48px] lg:w-[40px] sm:w-[36px] w-[30px] xl:h-[48px] lg:h-[40px] sm:h-[36px] h-[30px]  rounded-[100%] bg-white dark:bg-gray-900 flex justify-center items-center"
    >
      {isDarkMode ? (
        // آیکون ماه برای حالت تاریک
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m6.364 1.636l-.707.707M18 12h1m-1.636 6.364l-.707-.707M12 18v1m-6.364-1.636l-.707.707M6 12H5m1.636-6.364l-.707-.707M12 5a7 7 0 000 14 7 7 0 010-14z"
          />
        </svg>
      ) : (
        // آیکون خورشید برای حالت روشن
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m6.364 1.636l-.707.707M18 12h1m-1.636 6.364l-.707-.707M12 18v1m-6.364-1.636l-.707.707M6 12H5m1.636-6.364l-.707-.707M12 5a7 7 0 000 14 7 7 0 010-14z"
          />
        </svg>
      )}
    </button>
  );
};

export  {DarkButton};
