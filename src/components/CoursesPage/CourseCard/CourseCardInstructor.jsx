import React from "react";
import { convertEnToPe } from "persian-number";

const CourseCardInstructor = ({ teacherName }) => {
  return (
    <div className="flex  font-[500] text-[14px] mt-[16px] mr-[16px]  justify-between tracking-tight">
      <p>
        <span className="font-[700] ">مدرس</span> : {teacherName}
      </p>
      <p className="ml-5">{convertEnToPe(254)} دانش آموز</p>
    </div>
  );
};

export { CourseCardInstructor };
