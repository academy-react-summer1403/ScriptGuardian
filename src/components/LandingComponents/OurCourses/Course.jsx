import React from "react";
import { ImageCourse } from "./LandingCoursesCoponenets/ImageCourse";
import { CourseInfo } from "./LandingCoursesCoponenets/CourseInfo";
import { CourseInstructor } from "./LandingCoursesCoponenets/CourseInstructor";
import { PriceAndFavorites } from "./LandingCoursesCoponenets/PriceAndFavorites";
import { useNavigate } from "react-router-dom";

const Course = ({
  style,
  courseId,
  teacherName,
  cost,
  likeCount,
  dissLikeCount,
  userIsLiked,
  title,
  describe,
  isUserFavorite,
  userLikeId,
  userIsDissLiked,
  userFavoriteId,
  tumbImageAddress,
  lastUpdate,
}) => {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate(`/Courses/${courseId}`);
  };

  const handleClickTitle = (e) => {
    e.stopPropagation(); // جلوگیری از پیشرفت رویداد کلیک
  };

  return (
    <div
      className={style}
      onClick={navigateDetails}
      style={{ direction: "rtl" }}
    >
      {/* Image */}
      <ImageCourse tumbImageAddress={tumbImageAddress} />
      {/* Content */}

      {/* TopicCourses */}
      <h3 className="xl:font-[700] lg:font-[600] font-[700] mt-2 xl:mr-[16px] lg:mr-[10px] mr-[16px] ">
        {" "}
        {title.length > 30 ? title.substring(0, 27) + "..." : title}
      </h3>
      <CourseInfo lastUpdate={lastUpdate} />
      <CourseInstructor teacherName={teacherName} />
      <PriceAndFavorites
        handleClickTitle={handleClickTitle}
        likeCount={likeCount}
        cost={cost}
        dissLikeCount={dissLikeCount}
        isUserFavorite={isUserFavorite}
        courseId={courseId}
        userIsLiked={userIsLiked}
        userLikeId={userLikeId}
        userIsDissLiked={userIsDissLiked}
        userFavoriteId={userFavoriteId}
      />
    </div>
  );
};

export { Course };
