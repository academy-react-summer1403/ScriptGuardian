import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BigImage } from "../../components/DetailCourses/BigImage";
import { RatingCourses } from "../../components/DetailCourses/RatingCourses";
import { AboutCourses } from "../../components/DetailCourses/AboutCourses";
import { Tabs } from "../../components/DetailCourses/Tabs";

import { DetailsLeft } from "../../components/DetailCourses/DetailsLeft";
import { SliderCourseDetails } from "../../components/DetailCourses/SliderCourseDetails";
import { useCoursesDetail } from "../../core/services/api/DetailCourses/GetDetailCourses";
const CoursesDetails = () => {
  const { id } = useParams();
  console.log(id, "id");

  //API
  const { data } = useCoursesDetail(id);

  return (
    <>
      <div className="flex flex-col  container xl:w-[1280px] mx-auto mt-20 ">
        <div className="flex lg:flex-row flex-col lg:gap-x-[30px] lg:items-start items-center">
          <div className="flex flex-col xl:w-[843px] xl:mr-0 lg:w-[653px] mr-0 lg:mr-3 w-[95%] ">
            <BigImage
              imageAddress={data?.imageAddress}
              techs={data?.techs}
              isUserFavorite={data?.isUserFavorite}
              courseId={data?.courseId}
              userFavoriteId={data?.userFavoriteId}
            />
            <DetailsLeft
              startTime={data?.startTime}
              endTime={data?.endTime}
              courseStatusName={data?.courseStatusName}
              cost={data?.cost}
              currentRegistrants={data?.currentRegistrants}
              teacherName={data?.teacherName}
              courseId={data?.courseId}
              isCourseReseve={data?.isCourseReseve}
              isCourseUser={data?.isCourseUser}
              hidden={" flex lg:hidden"}
            />

            <AboutCourses title={data?.title} describe={data?.describe} />

            <RatingCourses
              currentUserDissLike={data?.currentUserDissLike}
              currentUserLike={data?.currentUserLike}
              likeCount={data?.likeCount}
              dissLikeCount={data?.dissLikeCount}
              courseId={data?.courseId}
              currentUserSetRate={data?.currentUserSetRate}
              currentUserRateNumber={data?.currentUserRateNumber}
              userLikeId={data?.userLikeId}
            />

            <Tabs techs={data?.techs} />
          </div>
          <DetailsLeft
            startTime={data?.startTime}
            endTime={data?.endTime}
            courseStatusName={data?.courseStatusName}
            cost={data?.cost}
            currentRegistrants={data?.currentRegistrants}
            teacherName={data?.teacherName}
            courseId={data?.courseId}
            isCourseReseve={data?.isCourseReseve}
            isCourseUser={data?.isCourseUser}
            hidden={"hidden md:hidden lg:flex "}
          />
        </div>

        <SliderCourseDetails />
      </div>
    </>
  );
};

export { CoursesDetails };
