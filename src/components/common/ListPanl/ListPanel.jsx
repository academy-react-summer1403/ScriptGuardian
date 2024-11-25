import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { convertIsoToJalali } from "../../../core/utils/dateUtils";
import noProfile from "../../../images/NewsDetails/default_image.png";
const ListPanel = ({
  tumbImageAddress,
  courseTitle,
  fullName,
  cost,
  courseId,
  lastUpdate,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center text-white h-[50px] bg-[#8cc9fa] dark:bg-[#1e3e57]  w-full rounded-xl mb-2 sm:text-base md:text-base  text-[10px] md:justify-start justify-around">
      <div className="lg:mr-[1%] sm:w-[6%] lg:w-[15%] md:w-[12%] md:mr-[6%] max-w-[60px] h-full    items-center md:flex  hidden">
        <img
          src={
            tumbImageAddress && tumbImageAddress != "Not-set"
              ? tumbImageAddress
              : noProfile
          }
          alt=""
          className="w-full object-cover h-[80%] rounded block"
        />
      </div>
      <div
        className="lg:mr-[12%] md:mr-[6%]   lg:w-[10%] md:w-[10%]   "
        title={courseTitle}
      >
        {courseTitle.length > 10
          ? courseTitle.slice(0, 10) + "..."
          : courseTitle}
      </div>
      <div
        className="lg:mr-[6%] md:mr-[5%]  lg:w-[12%] md:w-[15%] b"
        title={fullName}
      >
        {fullName.length > 10 ? fullName.slice(0, 10) + "..." : fullName}
      </div>
      <div className="lg:mr-[7.5%] md:mr-[4%]  lg:w-[10%] md:w-[11.3%]  ">
        {" "}
        <strong>{lastUpdate && convertIsoToJalali(lastUpdate)}</strong>
      </div>
      <div className="lg:mr-[10%] md:mr-[5%]  lg:w-[13%] md:w-[13%]  text-xs ">
        {/* {parseFloat(cost).toString()}  */}
        <span className="sm:block hidden">تومان</span>
        {cost.length > 6
          ? parseFloat(cost).toString().slice(0, 6) + "..."
          : parseFloat(cost).toString().slice(0, 6)}
      </div>
      <div className="flex items-center gap-x-1 sm:mr-[6%]">
        <FaEye
          className="cursor-pointer"
          onClick={() => {
            navigate(`/courses/${courseId}`);
          }}
        />
      </div>
    </div>
  );
};

export { ListPanel };
