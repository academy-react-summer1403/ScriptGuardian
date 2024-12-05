import React from "react";

import { Course } from "./Course";
import { useNavigate } from "react-router-dom";
import { useLandingCourses } from "../../../core/services/api/Landing/LandingCourses";
const OurCourses = () => {
  const navigate = useNavigate();

  const goTOCoursesPage = () => {
    navigate("/courses");
    window.scrollTo(0, 0); 
  };

  //Handel API

  const { data, isPending } = useLandingCourses();

  //style
  const style = `xl:w-[296px] lg:w-[230px] w-[296px] h-[389px] flex flex-col  dark:bg-gray-900 rounded-[24px] shadow-ّFirst-shadow text-[#263238] dark:text-white last:mb-5    `;
  return (
    <>
      <div className="bg-[#FAFBFC] dark:bg-[#2C2F33]  ">
        <div className="flex flex-col xl:w-[1280px] mx-auto container justify-center items-center    ">
          <div className="flex ">
            <h2 className="text-[#263238] dark:text-white mt-[80px] font-[900] xl:text-[40px] text-[36px] border-b-[4px] ">
              دوره های آموزشی
            </h2>
          </div>

          {/* Content */}
          <div className="flex lg:flex-row md:flex-row md:flex-wrap lg:flex-nowrap flex-col xl:gap-x-[30px] lg:gap-x-[18px] md:gap-x-7  lg:gap-y-0 gap-y-6 mt-[40px] sm:justify-between md:justify-center  xl:justify-start xl:w-full  md:items-start items-center">
            {data &&
              data?.map((courses, index) => {
                return (
                  <Course
                    key={index}
                    tumbImageAddress={courses.tumbImageAddress}
                    courseId={courses.courseId}
                    teacherName={courses.teacherName}
                    cost={courses.cost}
                    likeCount={courses.likeCount}
                    dissLikeCount={courses.dissLikeCount}
                    userIsLiked={courses.userIsLiked}
                    style={style}
                    title={courses.title}
                    describe={courses.describe}
                    isUserFavorite={courses.isUserFavorite}
                    userLikeId={courses.userLikeId}
                    userIsDissLiked={courses.userIsDissLiked}
                    userFavoriteId={courses.userFavoriteId}
                    lastUpdate={courses.lastUpdate}
                  />
                );
              })}
          </div>
          <div className="flex  justify-center xl:mt-[40px] mt-[50px]">
            {" "}
            <button
              className="w-[131px] h-[48px]  text-white bg-[#2196F3]  rounded-[80px] shadow-Second-shadow  hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] dark:bg-[#1565C0]  ease-in-out duration-300"
              onClick={goTOCoursesPage}
            >
              مشاهده همه{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { OurCourses };
