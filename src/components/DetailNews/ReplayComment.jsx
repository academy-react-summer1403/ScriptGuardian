import React, { useState } from "react";
import commentProfile from "../../images/NewsDetails/Unsplash-Avatars_0005s_0017_harps-joseph-tAvpDE7fXgY-unsplash.png";
import { useQueryClient } from "@tanstack/react-query";
import {
  useAddLikeCommentNews,
  useAddReplayCommentForNews,
  useDeleteLikeCommentNews,
} from "../../core/services/api/DetailNews/handelNewsComment";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const ReplayComment = ({
  describe,
  title,
  autor,
  likeCount,
  id,
  currentUserIsLike,
  roles,
  userId,
  newsId,
  currentUserIsDissLike,
  currentUserLikeId,
  dissLikeCount,
}) => {
  const queryClient = useQueryClient();

  // //API
  // //handel Like Comment
  // const { mutate: AddLike } = useAddLikeCommentNews();

  // const handelLike = () => {
  //   if (currentUserIsLike === true) {
  //     AddLike(
  //       { commentId: id, LikeType: false },
  //       {
  //         onSuccess: (data) => {
  //           if (data.success) {
  //             toast.success("کامنت با موفقیت لایکش برداشته شد");
  //             queryClient.invalidateQueries("AddLikeCommentNews");
  //           } else {
  //             toast.error("خطا در برداشتن لایک کامنت");
  //           }
  //         },
  //       }
  //     );
  //   } else {
  //     AddLike(
  //       { commentId: id, LikeType: true },

  //       {
  //         onSuccess: (data) => {
  //           if (data.success) {
  //             toast.success("کامنت با موفقیت لایک شد");
  //             queryClient.invalidateQueries("AddLikeCommentNews");
  //           } else {
  //             toast.error("خطا در لایک کامنت");
  //           }
  //         },
  //       }
  //     );
  //   }
  // };

  //API
  //handel Like Comment
  const { mutate: AddLikeAndDissLike } = useAddLikeCommentNews();
  const { mutate: DeleteLikeAndDissLike } = useDeleteLikeCommentNews();

  const handelLike = () => {
    if (currentUserIsLike === true) {
      DeleteLikeAndDissLike(currentUserLikeId, {
        onSuccess: () => {
          toast.success("با موفقیت لایک  برداشته شد");
          queryClient.invalidateQueries("DetailNews");
        },
      });
    } else {
      AddLikeAndDissLike(
        { commentId: id, LikeType: true },

        {
          onSuccess: (data) => {
            if (data.success) {
              toast.success("کامنت با موفقیت لایک شد");
              queryClient.invalidateQueries("DetailNews");
            } else {
              toast.error("خطا در لایک کامنت");
            }
          },
        }
      );
    }
  };

  const handelDissLike = () => {
    if (currentUserIsDissLike === true) {
      DeleteLikeAndDissLike(currentUserLikeId, {
        onSuccess: () => {
          toast.success("با موفقیت  دیس لایک  برداشته شد");
          queryClient.invalidateQueries("DetailNews");
        },
      });
    } else {
      AddLikeAndDissLike(
        { commentId: id, LikeType: false },

        {
          onSuccess: (data) => {
            if (data.success) {
              toast.success("کامنت با موفقیت دیس لایک شد");
              queryClient.invalidateQueries("DetailNews");
            } else {
              toast.error("خطا در  دیس لایک لایک کامنت");
            }
          },
        }
      );
    }
  };

  //show replay

  // تعریف یک یوز استیت برای نمایش یا عدم نمایش فرم ریپلای
  const [isReplyVisible, setIsReplyVisible] = useState(false);

  // تابعی برای تغییر وضعیت نمایش فرم
  const toggleReplyForm = () => {
    setIsReplyVisible(!isReplyVisible);
  };

  //handel Replay API

  const { mutate: postReplayComment } = useAddReplayCommentForNews();
  const formik = useFormik({
    initialValues: {
      newsId: newsId,
      userIpAddress: "1",
      title: "تست تست تست تست",
      describe: "",
      userId: userId,
      parentId: id,
    },
    onSubmit: (values, { resetForm }) => {
      postReplayComment(values, {
        onSuccess: (data) => {
          if (data.success === true) {
            if (roles.includes("Administrator") || roles.includes("Referee")) {
              toast.success("ریپلای  با موفقیت ارسال شد", data);
            } else {
              toast.warning("ریپلای ارسال شد در انتظار تایید", data);
            }
            queryClient.invalidateQueries("CoursesDetail");
            resetForm();
          } else {
            toast.error("خطا در ارسال کامنت");
          }
        },
      });
    },
  });

  return (
    <>
      <div className="xl:w-[722px]   w-[92%]   flex  flex-col sm:mr-[31px] mr-3 mt-6 border-r mb-5  border-[#CFD8DC] dark:border-[#B0BEC5] ">
        <div className="flex justify-between items-center w-full sm:mr-4 mr-2">
          <div className="flex items-center ">
            {" "}
            <img
              src={commentProfile}
              alt=""
              className="rounded-full sm:w-8 sm:h-8 w-6 h-6"
            />
            <span className="text-[#263238] dark:text-gray-200 mr-2">
              {autor}
            </span>
          </div>
          <p className="sm:text-xs text-[10px] text-[#607D8B] dark:text-gray-400">
            2 روز پیش
          </p>
        </div>
        <p className="sm:text-sm text-xs  text-[#455A64] dark:text-gray-400 mt-2 sm:mr-4 mr-2">
          <span className="text-[#2196F3] dark:text-[#1976D2]">
            @محمد زمانی{" "}
          </span>
          {title} {describe}
        </p>
        <div className="flex items-center text-sm mt-3 sm:mr-4 mr-2">
          {/* <p className="text-[#F44336] dark:text-[#D32F2F] sm:text-[16px] text-xs">
            {likeCount}
          </p>
          <span className="mr-1 sm:w-4 sm:h-4 w-3 h-3" onClick={handelLike}>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8736C8.18634 13.9536 7.81301 13.9536 7.58634 13.8736C5.65301 13.2136 1.33301 10.4602 1.33301 5.79356C1.33301 3.73356 2.99301 2.06689 5.03967 2.06689C6.25301 2.06689 7.32634 2.65356 7.99967 3.56023C8.67301 2.65356 9.75301 2.06689 10.9597 2.06689C13.0063 2.06689 14.6663 3.73356 14.6663 5.79356C14.6663 10.4602 10.3463 13.2136 8.41301 13.8736Z"
                className={`stroke-[#F44336]  dark:stroke-[#D32F2F] ${
                  currentUserIsLike ? "fill-[#F44336] dark:fill-[#D32F2F]" : ""
                }`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span> */}

          <div className="flex items-center gap-3">
            <button className="flex items-center 0">
              <span className="ml-1 text-xs dark:text-white">{likeCount}</span>
              <FaThumbsUp
                className={`text-sm ${
                  currentUserIsLike
                    ? "text-green-400 dark:text-green-600"
                    : "text-black dark:text-white"
                }`}
                onClick={handelLike}
              />
            </button>
            <button className="flex items-center ">
              <FaThumbsDown
                className={`text-sm  ${
                  currentUserIsDissLike
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
            className="text-[#455A64] dark:text-gray-400 mr-3 cursor-pointer "
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
      </div>
      {isReplyVisible && (
        <>
          <form onSubmit={formik.handleSubmit}>
            <div className="w-full flex justify-center  flex-col">
              <textarea
                className=" w-[85%] h-[100px] pt-3 pr-3 border rounded-[10px] mx-auto mt-[24px] dark:border-gray-950 dark:bg-slate-900 bg-slate-100  outline-none dark:caret-white"
                placeholder="نظر خودتو بنویس..."
                {...formik.getFieldProps("describe")}
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
    </>
  );
};

export { ReplayComment };
