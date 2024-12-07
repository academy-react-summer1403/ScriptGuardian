import { convertEnToPe } from "persian-number";
import React from "react";

const CourseCardInstructor = ({ teacherName }) => {
  return (
    <div className="flex  font-[500] text-[14px] mt-[16px] mr-[16px]  justify-between tracking-tight">
      <p title={teacherName}>
        <span className="font-[700] ">مدرس</span> :{" "}
        {teacherName
          ? teacherName.length > 10
            ? teacherName.substring(0, 10) + "..."
            : teacherName
          : "بدون نام"}
      </p>
      <p className="ml-5">{convertEnToPe(256)} دانش آموز</p>
    </div>
  );
};

export { CourseCardInstructor };
