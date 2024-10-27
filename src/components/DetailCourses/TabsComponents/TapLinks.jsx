import React from "react";

const TapLinks = ({activeTab  , setActiveTab}) => {
  return (
    <div className=" mt-[24px] flex border-b border-gray-300 dark:border-gray-500 w-[779px] mx-auto h-[41px] gap-x-10 ">
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
