import React from "react";


import { BigNews } from "./BigNews";
import { News } from "./News";
const NewsAndArticle = () => {
  return (
    <>
      <div className="mt-[100px] container mx-auto xl:w-[1280px]  xl:flex flex-col hidden">
        <div className="flex justify-center">
          <h2 className="font-[900] text-[40px] text-[#263238] dark:text-gray-400">
            اخبار و مقالات
          </h2>
        </div>
        <div className="flex mt-[40px] ">
        
          <BigNews/>
          <News/>
        </div>
        <div className="flex  justify-center mt-[40px]">
          {" "}
          <button className="w-[131px] h-[48px]  text-white bg-[#2196F3]  rounded-[80px] shadow-Second-shadow  hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] dark:bg-[#1565C0]  ease-in-out duration-300">
            مشاهده همه{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export { NewsAndArticle };
