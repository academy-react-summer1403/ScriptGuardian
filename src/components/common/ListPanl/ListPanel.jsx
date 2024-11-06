import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ListPanel = ({
  tumbImageAddress,
  courseTitle,
  fullName,
  cost,
  courseId,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center text-white h-[50px] bg-purple-400 dark:bg-purple-600 w-full rounded-xl mb-2 sm:text-base md:text-base  text-[10px] md:justify-start justify-around">
      <div className="lg:mr-[1%] sm:w-[6%] lg:w-[15%] md:w-[12%] md:mr-[6%] max-w-[60px] h-full    items-center md:flex  hidden">
        <img
          src={tumbImageAddress}
          alt=""
          className="w-full object-cover h-[80%] rounded block"
        />
      </div>
      <div className="lg:mr-[12%] md:mr-[6%]   lg:w-[10%] md:w-[10%]   ">
        {courseTitle}
      </div>
      <div className="lg:mr-[6%] md:mr-[5%]  lg:w-[12%] md:w-[15%] b">
        {fullName}
      </div>
      <div className="lg:mr-[7.5%] md:mr-[4%]  lg:w-[10%] md:w-[11.3%]  ">
        {" "}
        1403/10/02
      </div>
      <div className="lg:mr-[10%] md:mr-[5%]  lg:w-[13%] md:w-[13%] ">
        {cost} <span>تومان</span>
      </div>
      <div className="flex items-center gap-x-1 sm:mr-[6%]">
        <FaEye
          className="cursor-pointer"
          onClick={() => {
            navigate(`/courses/${courseId}`);
          }}
        />
        <FaTrash className="text-red-600" />
      </div>
    </div>
  );
};

export { ListPanel };
