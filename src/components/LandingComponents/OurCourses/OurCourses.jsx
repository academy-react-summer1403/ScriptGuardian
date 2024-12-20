import React from "react";

import { LandingCourses } from "./LandingCourses";
const OurCourses = () => {
  return (
    <>
      <div className="bg-[#FAFBFC] dark:bg-[#2C2F33]  ">
        <div className="flex flex-col xl:w-[1280px] mx-auto container justify-center items-center    ">
          <div className="flex ">
            <h2 className="text-[#263238] dark:text-white mt-[80px] font-[900] text-[40px] border-b-[4px] ">
              دوره های آموزشی
            </h2>
          </div>

          {/* Content */}
          <div className="flex xl:flex-row flex-col xl:gap-x-[32px] gap-y-6 mt-[40px] sm:justify-between items-center">
            <LandingCourses />
            <LandingCourses />
            <LandingCourses />
            <LandingCourses />
          </div>
          <div className="flex  justify-center mt-[40px]">
            {" "}
            <button className="w-[131px] h-[48px]  text-white bg-[#2196F3]  rounded-[80px] shadow-Second-shadow  hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] dark:bg-[#1565C0]  ease-in-out duration-300">مشاهده همه   </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { OurCourses };
