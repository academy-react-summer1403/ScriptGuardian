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

const SliderCourseDetails = () => {
  const { data } = useLandingCourses();

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div onClick={onClick} className="absolute top-[210px] left-0 z-[100]">
        <FaArrowLeft className="text-white " />
      </div>
    );
  };

  // دکمه سفارشی برای پیمایش به جلو
  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div onClick={onClick} className="absolute top-[210px] right-0">
        <FaArrowRight className="text-white" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    currentSlide: 0,
    nextArrow: <NextArrow />, // استفاده از دکمه‌های سفارشی
    prevArrow: <PrevArrow />,

    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    rtl: true,
  };

  const handleClickTitle = (e) => {
    e.stopPropagation(); // جلوگیری از پیشرفت رویداد کلیک
  };
  return (
    <div className="flex flex-col w-full    items-center">
      <h2 className="font-black text-[#263238] dark:text-gray-200 text-[40px] mt-20">
        دوره‌های مشابه{" "}
      </h2>

      <Slider
        {...settings}
        className="xl:w-[1280px] gap-0 lg:w-full md:w-[95%]   justify-center w-[300px] lg:mt-0 mt-10 flex    "
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
              />
            );
          })}
      </Slider>
    </div>
  );
};

export { SliderCourseDetails };
