import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import {
  useAddDissLikeCourses,
  useAddLikeCourses,
  useDeleteLikeCourses,
} from "../../core/services/api/CoursesPage/handelCourseLike";
import { toast } from "react-toastify";
import { useAddRateCourses } from "../../core/services/api/CoursesPage/handelRateCourses";
import { convertEnToPe } from "persian-number";

const RatingCourses = ({
  currentUserDissLike,
  currentUserLike,
  likeCount,
  dissLikeCount,
  courseId,
  currentUserRateNumber,
  userLikeId,
  currentRegistrants,
}) => {
  const queryClient = useQueryClient();
  //Api

  const { mutate: AddLike } = useAddLikeCourses();
  const { mutate: DeleteLike } = useDeleteLikeCourses();
  const { mutate: DissLike } = useAddDissLikeCourses();
  const handelLike = () => {
    if (currentUserLike == "1") {
      const formData = new FormData();
      formData.append("CourseLikeId", userLikeId);
      DeleteLike(formData, {
        onSuccess: () => {
          toast.success("با موفقیت  لایک پاک شد");

          queryClient.invalidateQueries("CoursesDetail");
        },
      });
    } else {
      AddLike(courseId, {
        onSuccess: () => {
          toast.success("با موفقیت لایک شد");
          queryClient.invalidateQueries("CoursesDetail");
        },
      }),
        {};
    }
  };

  const handleDissLike = () => {
    if (currentUserDissLike == "1") {
      const formData = new FormData();
      formData.append("CourseLikeId", userLikeId);
      DeleteLike(formData, {
        onSuccess: () => {
          toast.success("با موفقیت دیس لایک  پاک شد شد");

          queryClient.invalidateQueries("CoursesDetail");
        },
      });
    } else {
      DissLike(courseId, {
        onSuccess: () => {
          toast.success("با موفقیت دیس لایک شد");

          queryClient.invalidateQueries("CoursesDetail");
        },
      });
    }
  };

  //API Rate

  const totalStars = 5;

  const { mutate: AddRate } = useAddRateCourses();

  const handelRate = (index) => {
    AddRate(
      { CourseId: courseId, RateNumber: index + 1 },
      {
        onSuccess: () => {
          toast.success("با موفقیت امتیاز داده  شد");

          queryClient.invalidateQueries("CoursesDetail");
        },
      }
    );
  };
  return (
    <div className="w-full xl:h-[48px] flex xl:flex-row flex-col justify-between mt-4 xl:gap-y-0 gap-y-5">
      <div className="flex items-center xl:justify-start justify-between">
        {/* Stars */}
        <div className="flex flex-row-reverse cursor-pointer">
          {Array.from({ length: totalStars }).map((_, index) => (
            <span key={index} onClick={() => handelRate(index)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z"
                  className={`stroke-[#FFC107] dark:stroke-[#FF8F00] ${
                    index < currentUserRateNumber
                      ? "fill-[#FFC107] dark:fill-[#FF8F00]"
                      : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          ))}
        </div>
        <div className="flex items-center xl:gap-x-0 gap-x-2">
          <p className="sm:mr-3 text-[#263238] dark:text-gray-200 sm:text-base text-xs">
            امتیاز {convertEnToPe(20)} نفر
          </p>
          {/* <button className="sm:mr-4 h-[32px]  sm:w-[81px] w-[61px] flex justify-center items-center bg-[#2196F3] dark:bg-[#1565C0] text-white shadow-Second-shadow rounded-[80px] sm:text-[12px] text-[10px]">
            ثبت دیدگاه
          </button> */}
        </div>
      </div>
      <div className="flex items-center xl:justify-start justify-between">
        <p className="sm:ml-6 text-[#455A64] sm:text-base text-xs dark:text-gray-400">
          آیا از این مقاله راضی بودید ؟
        </p>

        <div className="flex items-center gap-3">
          <button className="flex items-center 0">
            <span className="ml-1 text-xs dark:text-white">
              {likeCount && convertEnToPe(likeCount)}
            </span>
            <FaThumbsUp
              className={`sm:text-xl ${
                currentUserLike == "1"
                  ? "text-green-400 dark:text-green-600"
                  : "text-black dark:text-white"
              }`}
              onClick={handelLike}
            />
          </button>
          <button className="flex items-center ">
            <FaThumbsDown
              className={`sm:text-xl  ${
                currentUserDissLike == "1"
                  ? " text-red-400 dark:text-red-600"
                  : "dark:text-white text-black "
              }`}
              onClick={handleDissLike}
            />
            <span className="mr-1 text-xs dark:text-white">
              {dissLikeCount && convertEnToPe(dissLikeCount)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { RatingCourses };
