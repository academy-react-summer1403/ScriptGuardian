import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BigImage } from "../../components/DetailCourses/BigImage";
import { RatingCourses } from "../../components/DetailCourses/RatingCourses";
import { AboutCourses } from "../../components/DetailCourses/AboutCourses";
import { Tabs } from "../../components/DetailCourses/Tabs";

import { DetailsLeft } from "../../components/DetailCourses/DetailsLeft";
const CoursesDetails = () => {
  const { id } = useParams();
  console.log(id, "id");

  return (
    <>
      <div className="flex  container xl:w-[1280px] mx-auto mt-20 gap-x-[30px]">
        <div className="flex flex-col w-[843px] ">
          <BigImage />

          <AboutCourses />

          <RatingCourses />

          <Tabs />
        </div>
        <DetailsLeft/>
      </div>
    </>
  );
};

export { CoursesDetails };
