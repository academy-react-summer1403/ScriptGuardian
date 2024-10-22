import React from "react";
import { Service } from "./Service";

const OurServices = () => {
  return (
    <div className="  bg-[#FAFBFC] dark:bg-[#2C2F33] ">
      <div className="flex flex-col xl:w-[1280px] mx-auto container justify-center items-center    " >
      {/* Topic */}
        <div className="flex ">
          <h2 className="text-[#263238] dark:text-white mt-[80px] font-[900] text-[40px] border-b-[4px] ">
            خدمات ما
          </h2>
        </div>

        {/* Content */}
        <div className="flex xl:flex-row flex-col xl:gap-x-[32px] gap-y-6 mt-[40px] sm:justify-between items-center">
            <Service/>
        </div>
      </div>
    </div>
  );
};

export { OurServices };
