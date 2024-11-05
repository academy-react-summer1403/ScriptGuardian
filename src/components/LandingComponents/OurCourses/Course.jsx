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
      <ImageCourse />
      {/* Content */}

      {/* TopicCourses */}
      <h3 className="font-[700] mt-[16px] mr-[16px] ">{title}</h3>
      <CourseInfo />
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
      />
    </div>
  );
};

export { Course };
