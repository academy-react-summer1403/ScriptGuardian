import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CourseCardInfo } from "../CoursesPage/CourseCard/CourseCardInfo";
import { TbBackground } from "react-icons/tb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Course } from "../LandingComponents/OurCourses/Course";
import { CoursesCard } from "../CoursesPage/CourseCard/CourseCard";

const SliderCourseDetails = () => {
  const [courses, setCourses] = useState([
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
  ]);

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


  return (
    <div className="flex flex-col w-full    items-center">
      <h2 className="font-black text-[#263238] dark:text-gray-200 text-[40px] mt-20">
        دوره‌های مشابه{" "}
      </h2>

      <Slider
        {...settings}
        className="xl:w-[1280px] gap-0 lg:w-full md:w-[95%]   justify-center w-[300px] lg:mt-0 mt-10 flex    "
      >
        {courses.map((courses, index) => {
          return <CoursesCard id={courses.id} key={index}  />;
        })}
      </Slider>



    </div>
  );
};

export { SliderCourseDetails };
