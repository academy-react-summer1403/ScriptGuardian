import React, { useEffect, useState } from "react";

const ThemeCourses = () => {
  const getInitialState = () => {
    const savedState = localStorage.getItem("isLeftActive");
    return savedState === null ? true : JSON.parse(savedState);
  };

  const [isLeftActive, setIsLeftActive] = useState(getInitialState);

  useEffect(() => {
    // ذخیره کردن مقدار isLeftActive در Local Storage هر بار که تغییر کند
    localStorage.setItem("isLeftActive", JSON.stringify(isLeftActive));
  }, [isLeftActive]);

  const handleLeftClick = () => {
    setIsLeftActive(true);
  };

  const handleRightClick = () => {
    setIsLeftActive(false);
  };
  return (
    <div className="sm:w-[100px] w-[50px] h-full flex bg-[#ECEFF1] dark:bg-[#1C1C1C] justify-center items-center gap-1 rounded-2xl ">
      <div
        className={`sm:w-[40px] w-5 h-[40px] flex justify-center items-center rounded-2xl  ${
          isLeftActive ? `bg-white dark:bg-gray-900` : ``
        }`}
        onClick={handleLeftClick}
      >
        <span  className="sm:w-6 sm:h-6 w-4 h-4">
          <svg

            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              className="stroke-[#263238] dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.03 8.5H22"
              className="stroke-[#263238] dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.03 15.5H22"
              className="stroke-[#263238] dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.51001 21.9898V2.00977"
              className="stroke-[#263238] dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.51 21.9898V2.00977"
              className="stroke-[#263238] dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div
        className={`sm:w-[40px] w-5 h-[40px] flex justify-center items-center rounded-2xl  ${
          !isLeftActive ? `bg-white dark:bg-gray-900` : ``
        }`}
        onClick={handleRightClick}
      >
        <span className="sm:w-6 sm:h-6 w-4 h-4">
          <svg

            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              className="stroke-[#263238] dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.03 8.5H22"
              className="stroke-[#263238] dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.03 15.5H22"
              className="stroke-[#263238] dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export { ThemeCourses };
