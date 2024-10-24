import React from "react";

import { BigNews } from "./BigNews";
import { News } from "./News";
import { useNavigate } from "react-router-dom";
const NewsAndArticle = () => {
  const navigate = useNavigate();

  const goTOCoursesPage = () => {
    navigate("/News");
    window.scrollTo(0, 0); // اسکرول به بالای صفحه
  };
  return (
    <>
      {/* TODO*/}
      <div className="mt-[100px] container mx-auto xl:w-[1280px] w-full  flex flex-col ">
        <div className="flex justify-center">
          <h2 className="font-[900] text-[40px] text-[#263238] dark:text-gray-400">
            اخبار و مقالات
          </h2>
        </div>
        <div className="flex xl:flex-row flex-col mt-[40px]   ">
        {/* TODO:RESPOSIVE */}
          <BigNews />
          <News />
        </div>
        <div className="flex  justify-center mt-[40px] ">
          {" "}
          <button className="w-[131px] h-[48px]  text-white bg-[#2196F3]  rounded-[80px] shadow-Second-shadow  hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] dark:bg-[#1565C0]  ease-in-out duration-300" onClick={goTOCoursesPage}>
            مشاهده همه{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export { NewsAndArticle };
