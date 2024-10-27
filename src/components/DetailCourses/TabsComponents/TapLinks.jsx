import React from "react";

const TapLinks = ({activeTab  , setActiveTab}) => {
  return (
    <div className=" xl:mt-[24px] mt-2 flex border-b border-gray-300 dark:border-gray-500 xl:w-[779px]  w-[95%] mx-auto h-[41px] sm:text-base text-xs gap-x-10  sm:justify-start justify-center">
      <button
        className={` ${
          activeTab === "description"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-500 dark:text-gray-300"
        }`}
        onClick={() => setActiveTab("description")}
      >
        توضیحات
      </button>
      <button
        className={` ${
          activeTab === "preview"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-500 dark:text-gray-300"
        }`}
        onClick={() => setActiveTab("preview")}
      >
        پیش نمایش
      </button>
      <button
        className={` ${
          activeTab === "comments"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-500 dark:text-gray-300"
        }`}
        onClick={() => setActiveTab("comments")}
      >
        نظرات کاربران
      </button>
    </div>
  );
};

export  {TapLinks};
