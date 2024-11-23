import React from "react";

import { Course } from "./Course";
import { useNavigate } from "react-router-dom";
import { useLandingCourses } from "../../../core/services/api/Landing/LandingCourses";
const OurCourses = () => {
  const navigate = useNavigate();

  const goTOCoursesPage = () => {
    navigate("/courses");
    window.scrollTo(0, 0); // اسکرول به بالای صفحه
  };

  //Handel API

  const { data, isPending } = useLandingCourses();

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  // console.log(data, "this data Landing Courses in OurCourses Comp");

  //style
  const style = `w-[296px] h-[389px] flex flex-col  dark:bg-gray-900 rounded-[24px] shadow-ّFirst-shadow text-[#263238] dark:text-white last:mb-5    `;
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
          <div className="flex  justify-center mt-[40px]">
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
