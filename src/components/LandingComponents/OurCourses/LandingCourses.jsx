import React from "react";
import { ImageCourse } from "./LandingCoursesCoponenets/ImageCourse";
import { CourseInfo } from "./LandingCoursesCoponenets/CourseInfo";
import { CourseInstructor } from "./LandingCoursesCoponenets/CourseInstructor";
import { PriceAndFavorites } from "./LandingCoursesCoponenets/PriceAndFavorites";
import { useNavigate } from "react-router-dom";

const LandingCourses = ({ id }) => {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate(`/Courses/${id}`);
  };
  return (
    <div className="w-[296px] h-[389px] flex flex-col bg-white dark:bg-gray-900 rounded-[24px] shadow-ّFirst-shadow text-[#263238] dark:text-white last:mb-5  " onClick={navigateDetails}>
      {/* Image */}
      <ImageCourse />
      {/* Content */}

      {/* TopicCourses */}
      <h3 className="font-[700] mt-[16px] mr-[16px] ">
        دوره جامع React JS صفر تا صد
      </h3>
      <CourseInfo />
      <CourseInstructor />
      <PriceAndFavorites />
    </div>
  );
};

export { LandingCourses };
