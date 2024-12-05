import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CourseCardInfo } from "../CoursesPage/CourseCard/CourseCardInfo";
import { TbBackground } from "react-icons/tb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Course } from "../LandingComponents/OurCourses/Course";
import { CoursesCard } from "../CoursesPage/CourseCard/CourseCard";
import { useLandingCourses } from "../../core/services/api/Landing/LandingCourses";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SliderCourseDetails = () => {
  const { data } = useLandingCourses();

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute top-[210px] left-[-10px] z-[100]"
      >
        <AiOutlineLeft className="dark:text-white text-[#263238] text-[60px]" />
      </div>
    );
  };

  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute top-[210px]  xl:right-[10px] lg:right-[30px] md:right-[52px] right-[-10px] cursor-pointer"
      >
        <AiOutlineRight className="dark:text-white text-[#263238] text-[60px]" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    // currentSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 608,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    rtl: true,
  };

  const handleClickTitle = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="flex flex-col w-full bg-    items-center">
      <h2 className="font-black text-[#263238] dark:text-gray-200 text-[40px] mt-20 mb-10">
        دوره‌های مشابه{" "}
      </h2>

      <Slider
        {...settings}
        className="xl:w-[1280px] overflow-hidden b gap-0 lg:w-full md:w-[95%]   bg- justify-center sm:w-[100%] w-[320px]  lg:mt-0 mt-10 flex  relative"
      >
        {data &&
          data?.map((courses, index) => {
            return (
              <CoursesCard
                key={index}
                tumbImageAddress={courses?.tumbImageAddress}
                title={courses?.title}
                teacherName={courses?.teacherName}
                handleClickTitle={handleClickTitle}
                likeCount={courses?.likeCount}
                cost={courses?.cost}
                dissLikeCount={courses?.dissLikeCount}
                isUserFavorite={courses?.isUserFavorite}
                courseId={courses?.courseId}
                userIsLiked={courses?.userIsLiked}
                userLikeId={courses?.userLikeId}
                userIsDissLiked={courses?.userIsDissLiked}
                userFavoriteId={courses?.userFavoriteId}
                lastUpdate={courses?.lastUpdate}
              />
            );
          })}
      </Slider>
    </div>
  );
};

export { SliderCourseDetails };
