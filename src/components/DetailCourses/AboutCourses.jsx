import React from "react";

const AboutCourses = ({ title, describe }) => {
  return (
    <div className="w-full xl:h-[137px]  flex-col mt-8">
      <h2 className="text-[#263238] dark:text-gray-200 md:text-[32px] sm:text-3xl text-xl">
        {title ? title : ""}{" "}
      </h2>
      <p className="mt-3 text-[#455A64] dark:text-gray-400 sm:text-base text-xs">
        {describe ? describe : ""}
      </p>
    </div>
  );
};

export { AboutCourses };
