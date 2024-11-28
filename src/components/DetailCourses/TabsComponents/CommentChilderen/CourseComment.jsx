import React, { useState } from "react";
import commentProfile from "../../../../images/NewsDetails/Unsplash-Avatars_0005s_0017_harps-joseph-tAvpDE7fXgY-unsplash.png";
import {
  useAddLikeCommentNews,
  useAddReplayCommentForNews,
  useDeleteLikeCommentNews,
} from "../../../../core/services/api/DetailNews/handelNewsComment";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useReplayCommentNews } from "../../../../core/services/api/DetailNews/handelNewsComment";
import { useFormik } from "formik";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { ReplayCommentCourse } from "./ReplayCommentCourse";
import Image from "../../../../images/StudentPanel/NavStudent/images.png";
import {
  useAddCommentCourse,
  useAddDissLikeCommentCourse,
  useAddLikeCommentCourse,
  useAddReplayCommentCourse,
  useDeleteLikeCommentCourse,
  useReplayCommentCourses,
} from "../../../../core/services/api/DetailCourses/handelCommentCourses";
import { convertIsoToJalali } from "../../../../core/utils/dateUtils";
const CourseComment = ({
  title,
  describe,
  likeCount,
  currentUserIsLike,
  author,
  replyCount,
  acceptReplysCount,
  isLastVisible,
  onShowMore,
  newsId,
  id,
  roles,
  userId,
  parentId,
  currentUserLikeId,
  currentUserIsDissLike,
  dissLikeCount,
  pictureAddress,
  index,
  CommentId,
  courseId,
  currentUserEmotion,
  insertDate,
}) => {
  const queryClient = useQueryClient();

  //API
  //handel Like Comment
  const { mutate: AddLike } = useAddLikeCommentCourse();
  const { mutate: AddDissLike } = useAddDissLikeCommentCourse();
  const { mutate: DeleteLikeAndDissLike } = useDeleteLikeCommentCourse();

  const handelLike = () => {
    // if (currentUserIsLike === true) {
    // DeleteLikeAndDissLike(currentUserLikeId, {
    //   onSuccess: () => {
    //     toast.success("با موفقیت لایک  برداشته شد");
    //     queryClient.invalidateQueries("DetailNews");
    //   },
    // });
    // } else {
    //   AddLikeAndDissLike(
    //     { commentId: id, LikeType: true },

    //     {
    //       onSuccess: (data) => {
    //         if (data.success) {
    //           toast.success("کامنت با موفقیت لایک شد");
    //           queryClient.invalidateQueries("DetailNews");
    //         } else {
    //           toast.error("خطا در لایک کامنت");
    //         }
    //       },
    //     }
    //   );
    // }

    AddLike(CommentId, {
      onSuccess: () => {
        toast.success("با موفقیت لایک  شد شد");
        queryClient.invalidateQueries("CommentCourses");
      },
    });
  };

  const handelDissLike = () => {
    // if (currentUserIsDissLike === true) {
    //   DeleteLikeAndDissLike(currentUserLikeId, {
    //     onSuccess: () => {
    //       toast.success("با موفقیت  دیس لایک  برداشته شد");
    //       queryClient.invalidateQueries("DetailNews");
    //     },
    //   });
    // } else {
    //   AddLikeAndDissLike(
    //     { commentId: id, LikeType: false },
    //     {
    //       onSuccess: (data) => {
    //         if (data.success) {
    //           toast.success("کامنت با موفقیت دیس لایک شد");
    //           queryClient.invalidateQueries("DetailNews");
    //         } else {
    //           toast.error("خطا در  دیس لایک لایک کامنت");
    //         }
    //       },
    //     }
    //   );
    // }

    if (currentUserEmotion === "-") {
      AddDissLike(CommentId, {
        onSuccess: () => {
          toast.success("با موفقیت دیس لایک  شد شد");
          queryClient.invalidateQueries("CommentCourses");
        },
      });
    } else {
      DeleteLikeAndDissLike(currentUserLikeId, {
        onSuccess: () => {
          toast.success("با موفقیت دیس لایک  شد شد");
          queryClient.invalidateQueries("CommentCourses");
        },
      });
    }
  };

  // API
  // Handel Get Replay Comments
  const { data } = useReplayCommentCourses({ courseId, CommentId });
  console.log("this Data Of Replay Comments", data);
  // Handle Replay

  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  //handel replay

  const [isReplyVisible, setIsReplyVisible] = useState(false);

  const toggleReplyForm = () => {
    setIsReplyVisible(!isReplyVisible);
  };

  //handel Replay API

  const { mutate: AddReplayComment } = useAddReplayCommentCourse();
  const formik = useFormik({
    initialValues: {
      CommentId: CommentId,
      CourseId: courseId,
      Title: "",
      Describe: "",
    },
    onSubmit: (values, { resetForm }) => {
      // const formData = new FormData();
      // formData.append("CourseId", values.CourseId);
      // formData.append("Title", values.Title);
      // formData.append("Describe", values.Describe);
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      AddReplayComment(formData, {
        onSuccess: (data) => {
          if (data.success === true) {
            if (roles.includes("Administrator") || roles.includes("Referee")) {
              toast.success("ریپلای  با موفقیت ارسال شد", data);
              setIsReplyVisible(false);
            } else {
              toast.warning("ریپلای ارسال شد در انتظار تایید", data);
              setIsReplyVisible(false);
            }
            queryClient.invalidateQueries("CommentCourses");
            resetForm();
          } else {
            toast.error("خطا در ارسال کامنت");
          }
        },
      });
    },
  });

  ///Replay Name
  const nameOfReplay = author;
  return (
    <>
      <div
        className={`w-full  sm:min-h-[92px] flex   flex-col ${
          showReplies && isReplyVisible === false ? "" : "mb-5 "
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center ">
            {" "}
            <img
              src={pictureAddress ? pictureAddress : Image}
              alt=""
              className="rounded-full sm:w-8 sm:h-8 w-6 h-6"
            />
            <span className="text-[#263238] dark:text-gray-200 sm:mr-2 mr-1 sm:text-base text-xs">
              {author}
            </span>
          </div>
          <p className="sm:text-xs text-[10px] text-[#607D8B] dark:text-gray-400">
            <strong>{insertDate && convertIsoToJalali(insertDate)}</strong>
          </p>
        </div>
        <p className="sm:text-sm text-xs text-[#455A64] dark:text-gray-400 mt-2">
          {title} {describe}
        </p>
        <div className="flex justify-between items-center sm:text-sm text-xs mt-3">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <button className="flex items-center 0">
                <span className="ml-1 text-xs dark:text-white">
                  {likeCount}
                </span>
                <FaThumbsUp
                  className={`text-sm ${
                    currentUserEmotion == "LIKED"
                      ? "text-green-400 dark:text-green-600"
                      : "text-black dark:text-white"
                  }`}
                  onClick={handelLike}
                />
              </button>
              <button className="flex items-center ">
                <FaThumbsDown
                  className={`text-sm  ${
                    currentUserEmotion == "DISSLIKED"
                      ? "text-red-400 dark:text-red-600"
                      : "text-black dark:text-white"
                  }`}
                  onClick={handelDissLike}
                />
                <span className="mr-1 text-xs dark:text-white">
                  {dissLikeCount}
                </span>
              </button>
            </div>
            <p
              className="text-[#455A64] dark:text-gray-400 mr-3  cursor-pointer"
              onClick={toggleReplyForm}
            >
              {" "}
              {isReplyVisible ? "انصراف" : "پاسخ"}
            </p>
            <span className="mr-1 sm:w-4 w-3 sm:h-4 h-3">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3136 11.2202L12.5736 13.3268C12.6402 13.8802 12.0469 14.2668 11.5736 13.9801L8.78022 12.3202C8.47356 12.3202 8.17356 12.3002 7.88023 12.2602C8.37356 11.6802 8.66689 10.9468 8.66689 10.1535C8.66689 8.26015 7.02689 6.72685 5.00022 6.72685C4.22689 6.72685 3.51356 6.94683 2.92023 7.3335C2.90023 7.16683 2.89355 7.00016 2.89355 6.82682C2.89355 3.79349 5.52689 1.3335 8.78022 1.3335C12.0336 1.3335 14.6669 3.79349 14.6669 6.82682C14.6669 8.62682 13.7402 10.2202 12.3136 11.2202Z"
                  className="stroke-[#455A64] dark:stroke-gray-400"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66634 10.1532C8.66634 10.9465 8.37301 11.6799 7.87968 12.2599C7.21968 13.0599 6.17301 13.5732 4.99967 13.5732L3.25967 14.6065C2.96634 14.7865 2.59301 14.5399 2.63301 14.1999L2.79967 12.8866C1.90634 12.2666 1.33301 11.2732 1.33301 10.1532C1.33301 8.97986 1.95968 7.94654 2.91968 7.33321C3.51301 6.94654 4.22634 6.72656 4.99967 6.72656C7.02634 6.72656 8.66634 8.25987 8.66634 10.1532Z"
                  className="stroke-[#455A64] dark:stroke-gray-400"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          {acceptReplysCount ? (
            <div
              onClick={toggleReplies}
              className="flex text-[#2196F3] dark:text-[#1565C0] cursor-pointer"
            >
              {showReplies ? "پنهان کردن پاسخ‌ها" : "نمایش پاسخ‌ها"}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {isReplyVisible && (
        <>
          <form onSubmit={formik.handleSubmit}>
            <div className="w-full flex justify-center  flex-col">
              <input
                className="xl:w-[779px] w-[95%] h-[50px] pt-1 pr-3 border rounded-[10px] mx-auto mt-[24px] dark:border-gray-950 dark:bg-slate-900 bg-slate-100  outline-none dark:caret-white dark:text-white text-black"
                placeholder=" عنوان نظر خودتو بنویس..."
                {...formik.getFieldProps("Title")}
              />
              <textarea
                className="xl:w-[779px] w-[95%] h-[100px] pt-3 pr-3 border rounded-[10px] mx-auto mt-[24px] dark:border-gray-950 dark:bg-slate-900 dark:text-white bg-slate-100  outline-none dark:caret-white"
                placeholder="نظر خودتو بنویس..."
                {...formik.getFieldProps("Describe")}
              />

              <button
                type="submit"
                className="w-[84px] h-[48px] mx-auto bg-[#2196F3] dark:bg-[#1565C0] text-white rounded-[80px] mt-4 "
              >
                ارسال
              </button>
            </div>
          </form>
        </>
      )}
      {showReplies && (
        <>
          {/* <ReplayComment /> */}
          {data?.map((item, index) => {
            return (
              <ReplayCommentCourse
                key={index}
                title={item?.title}
                describe={item?.describe}
                autor={item?.author}
                likeCount={item?.likeCount}
                id={item?.id}
                currentUserIsLike={item?.currentUserIsLike}
                courseId={item?.courseId}
                roles={roles}
                userId={userId}
                currentUserIsDissLike={item?.currentUserIsDissLike}
                currentUserLikeId={item?.currentUserLikeId}
                dissLikeCount={item?.disslikeCount}
                nameOfReplay={nameOfReplay}
                CommentId={item?.id}
                currentUserEmotion={item?.currentUserEmotion}
                pictureAddress={item?.pictureAddress}
                insertDate={item?.insertDate}
              />
            );
          })}
        </>
      )}

      {isLastVisible && (
        <button onClick={onShowMore} className="text-blue-500 mt-2 mb-5">
          نمایش بیشتر
        </button>
      )}
    </>
  );
};

export { CourseComment };
