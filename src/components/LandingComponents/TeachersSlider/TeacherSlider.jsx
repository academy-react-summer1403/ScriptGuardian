import React, { useState } from "react";
import ImageSLider from "../../../images/landing/TeachersSlider/BGIMAGE.jfif";
import noProfile from "../../../images/NewsDetails/profile.png";
import noProfile2 from "../../../images/landing/NOPROFILE2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { useLandingTeachers } from "../../../core/services/api/Landing/LandingTeachers";
import { Element } from "react-scroll";
const TeacherSlider = () => {
  //API
  const { data, isPending } = useLandingTeachers();

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute top-[210px] left-[-28px] z-[100]"
      >
        <AiOutlineLeft className="dark:text-white text-[#263238] text-[60px]" />
      </div>
    );
  };

  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute top-[210px] right-0 cursor-pointer"
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 830,
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
    ],
  };

  const truncateName = (name) => {
    return name.length > 13 ? name.substring(0, 13) + "..." : name;
  };

  return (
    <>
      {/* Div */}
      <Element
        className="flex flex-col items-center z-[10] lg dark:"
        id="slider"
      >
        <div className=" mt-[64px] flex justify-center">
          <h2 className="font-[900] text-[40px] text-[#263238] dark:text-gray-400  mb-10">
            اساتید ما{" "}
          </h2>
        </div>

        <Slider {...settings} className="xl:w-[1280px] w-[90%]    ">
          {data &&
            data?.map((item, index) => {
              if (!item.fullName) return null;

              return (
                <div
                  className={`xl:w-[296px] md:w-[230px] md:max-w-[296px] h-[382px]  lg:mr-0 md:mr-[30px] flex flex-col items-center justify-center mb-5 ${
                    index % 2 !== 0 ? "sm:mt-[64px] " : ""
                  }`}
                  key={index}
                >
                  <div className="xl:w-[296px] md:w-[230px] md:max-w-[296px] sm:max-w-[300px] sm:w-[250px] h-[300px]  flex">
                    <img
                      src={
                        item.pictureAddress && item.pictureAddress != "Not-set"
                          ? item.pictureAddress
                          : noProfile2
                      }
                      className="w-full h-full rounded-[24px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#263238] dark:text-gray-400 mt-[16px] font-[700] xl:text-[24px] text-[20px] md:mr-0 sm:mr-[50px]">
                      {item.fullName}
                    </h3>
                    {/* <p className="text-[#455A64] dark:text-gray-200 mt-[4px] xl:text-[16px] text-[14px]">
                      بکند, node js, .netcore, database
                    </p> */}
                  </div>
                </div>
              );
            })}
        </Slider>
      </Element>
    </>
  );
};

export { TeacherSlider };
