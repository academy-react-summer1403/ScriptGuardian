import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import {
  useAddDissLikeCourses,
  useAddLikeCourses,
  useDeleteLikeCourses,
} from "../../../../core/services/api/CoursesPage/handelCourseLike";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  useAddFavoriteCourses,
  useDeleteFavoriteCourses,
} from "../../../../core/services/api/CoursesPage/handelCoursesFavorite";
const PriceAndFavorites = ({
  handleClickTitle,
  likeCount,
  cost,
  isUserFavorite,
  dissLikeCount,
  courseId,
  userIsLiked,
  userLikeId,
  userIsDissLiked,
  userFavoriteId,
}) => {
  const queryClient = useQueryClient();
  //Api

  const { mutate: AddLike } = useAddLikeCourses();
  const { mutate: DeleteLike } = useDeleteLikeCourses();
  const { mutate: DissLike } = useAddDissLikeCourses();
  const handelLike = () => {
    if (userIsLiked === true) {
      const formData = new FormData();
      formData.append("CourseLikeId", userLikeId);
      DeleteLike(formData, {
        onSuccess: () => {
          toast.success("با موفقیت لایک   پاک شد");
          queryClient.invalidateQueries("LandingCourses", "Courses");
        },
      });
    } else {
      AddLike(courseId, {
        onSuccess: () => {
          toast.success("با موفقیت لایک شد");
          queryClient.invalidateQueries("LandingCourses", "Courses");
        },
      }),
        {};
    }
  };

  // const handleDissLike = () => {
  //   DissLike(courseId, {
  //     onSuccess: () => {
  //       toast.success("با موفقیت دیس لایک شد");

  //       queryClient.invalidateQueries("LandingCourses", "CoursesDetail");
  //     },
  //   });
  // };

  const handleDissLike = () => {
    if (userIsDissLiked === true) {
      const formData = new FormData();
      formData.append("CourseLikeId", userLikeId);
      DeleteLike(formData, {
        onSuccess: () => {
          toast.success("با موفقیت دیس لایک  پاک  شد");

          queryClient.invalidateQueries("LandingCourses", "Courses");
        },
      });
    } else {
      DissLike(courseId, {
        onSuccess: () => {
          toast.success("با موفقیت دیس لایک شد");

          queryClient.invalidateQueries("LandingCourses");
        },
      });
    }
  };

  //handel favorite

  //API

  const { mutate: AddFavorite } = useAddFavoriteCourses();
  const { mutate: DeleteFavorite } = useDeleteFavoriteCourses();
  const handelFavorite = () => {
    if (isUserFavorite === true) {
      const formData = new FormData();
      formData.append("CourseFavoriteId", userFavoriteId);
      DeleteFavorite(formData, {
        onSuccess: () => {
          toast.success("با موفقیت از  لیست علاقه مندی ها حذف شد");

          queryClient.invalidateQueries("LandingCourses");
        },
      });
    } else {
      AddFavorite(courseId, {
        onSuccess: () => {
          toast.success("با موفقیت به  لیست علاقه مندی ها اضافه شد");

          queryClient.invalidateQueries("LandingCourses");
        },
      });
    }
  };

  const isFavorite = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41337 13.8736C8.18671 13.9536 7.81337 13.9536 7.58671 13.8736C5.65337 13.2136 1.33337 10.4602 1.33337 5.79356C1.33337 3.73356 2.99337 2.06689 5.04004 2.06689C6.25337 2.06689 7.32671 2.65356 8.00004 3.56023C8.67337 2.65356 9.75337 2.06689 10.96 2.06689C13.0067 2.06689 14.6667 3.73356 14.6667 5.79356C14.6667 10.4602 10.3467 13.2136 8.41337 13.8736Z"
        fill="#F44336"
        stroke="#F44336"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const isFavoriteFalse = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41331 13.8736C8.18665 13.9536 7.81331 13.9536 7.58665 13.8736C5.65331 13.2136 1.33331 10.4602 1.33331 5.79356C1.33331 3.73356 2.99331 2.06689 5.03998 2.06689C6.25331 2.06689 7.32665 2.65356 7.99998 3.56023C8.67331 2.65356 9.75331 2.06689 10.96 2.06689C13.0066 2.06689 14.6666 3.73356 14.6666 5.79356C14.6666 10.4602 10.3466 13.2136 8.41331 13.8736Z"
        stroke="#F44336"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  console.log(isUserFavorite, "isUserFavorite");
  return (
    <div
      className="flex  mt-[14px] justify-between  items-center"
      onClick={handleClickTitle}
    >
      <div className="w-[51px] h-[32px] bg-[#FFEBEE] text-[#F44336] dark:bg-[#2E2E2E] dark:text-[#FFCDD2] rounded-[24px] flex items-center justify-center gap-1 mr-[16px]">
        <span className="" onClick={handelFavorite}>
          {isUserFavorite ? isFavorite : isFavoriteFalse}
        </span>
      </div>
      {/* {userLikeId} */}
      <div className="flex items-center gap-3">
        <button className="flex items-center 0">
          <span className="ml-1 text-xs">{likeCount}</span>
          <FaThumbsUp
            className={`text-sm ${userIsLiked ? "text-green-400" : ""}`}
            onClick={handelLike}
          />
        </button>
        <button className="flex items-center ">
          <FaThumbsDown
            className={`text-sm  ${userIsDissLiked ? "text-red-400" : ""}`}
            onClick={handleDissLike}
          />
          <span className="mr-1 text-xs">{dissLikeCount}</span>
        </button>
      </div>
      <p className="text-[#2196F3] dark:text-[#BBDEFB] font-[500] tracking-tight">
        {" "}
        {cost}{" "}
        <span className="text-[12px] text-[#263238] dark:text-[#CFD8DC] ml-5">
          تومان
        </span>{" "}
      </p>
    </div>
  );
};

export { PriceAndFavorites };
