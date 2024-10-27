import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BigImage } from "../../components/DetailCourses/BigImage";
import { RatingCourses } from "../../components/DetailCourses/RatingCourses";
import { AboutCourses } from "../../components/DetailCourses/AboutCourses";
import { Tabs } from "../../components/DetailCourses/Tabs";

import { DetailsLeft } from "../../components/DetailCourses/DetailsLeft";
import { SliderCourseDetails } from "../../components/DetailCourses/SliderCourseDetails";
const CoursesDetails = () => {
  const { id } = useParams();
  console.log(id, "id");

  return (
    <>
      <div className="flex flex-col  container xl:w-[1280px] mx-auto mt-20 ">
        <div className="flex lg:flex-row flex-col lg:gap-x-[30px] lg:items-start items-center">
          <div className="flex flex-col xl:w-[843px] xl:mr-0 lg:w-[653px] mr-0 lg:mr-3 w-[95%] ">
            <BigImage />

            <AboutCourses />

            <RatingCourses />

            <Tabs />
          </div>
          <DetailsLeft />
        </div>

        <SliderCourseDetails/>
      </div>
    </>
  );
};

export { CoursesDetails };
