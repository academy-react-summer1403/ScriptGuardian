import React, { useState } from "react";
import commentProfile from "../../images/NewsDetails/Unsplash-Avatars_0005s_0017_harps-joseph-tAvpDE7fXgY-unsplash.png";
import { useAddLikeCommentNews } from "../../core/services/api/DetailNews/handelNewsComment";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { ReplayComment } from "./ReplayComment";
import { useReplayCommentNews } from "../../core/services/api/DetailNews/handelNewsComment";

const Comment = ({
  title,
  describe,
  likeCount,
  currentUserIsLike,
  autor,
  replyCount,
  isLastVisible,
  onShowMore,
  id,
}) => {
  const queryClient = useQueryClient();

  //API
  //handel Like Comment
  const { mutate: AddLike } = useAddLikeCommentNews();

  const handelLike = () => {
    if (currentUserIsLike === true) {
      AddLike(
        { commentId: id, LikeType: false },
        {
          onSuccess: (data) => {
            if (data.success) {
              toast.success("کامنت با موفقیت لایکش برداشته شد");
              queryClient.invalidateQueries("AddLikeCommentNews");
            } else {
              toast.error("خطا در برداشتن لایک کامنت");
            }
          },
        }
      );
    } else {
      AddLike(
        { commentId: id, LikeType: true },

        {
          onSuccess: (data) => {
            if (data.success) {
              toast.success("کامنت با موفقیت لایک شد");
              queryClient.invalidateQueries("AddLikeCommentNews");
            } else {
              toast.error("خطا در لایک کامنت");
            }
          },
        }
      );
    }
  };

  // API
  // Handel Get Replay Comments
  const { data } = useReplayCommentNews(id);
  console.log("this Data Of Replay Comments", data);
  // Handle Replay

  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <>
      {/* {id} */}
      <div
        className={`w-full  sm:min-h-[92px] flex   flex-col ${
          showReplies ? "" : "mb-5 "
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center ">
            {" "}
            <img
              src={commentProfile}
              alt=""
              className="rounded-full sm:w-8 sm:h-8 w-6 h-6"
            />
            <span className="text-[#263238] dark:text-gray-200 sm:mr-2 mr-1 sm:text-base text-xs">
              {autor}{" "}
            </span>
          </div>
          <p className="sm:text-xs text-[10px] text-[#607D8B] dark:text-gray-400">
            2 روز پیش
          </p>
        </div>
        <p className="sm:text-sm text-xs text-[#455A64] dark:text-gray-400 mt-2">
          {title} {describe}
        </p>
        <div className="flex justify-between items-center sm:text-sm text-xs mt-3">
          <div className="flex items-center">
            <p className="text-[#F44336] dark:text-[#D32F2F]">{likeCount}</p>
            <span className="mr-1 sm:w-4 sm:h-4 w-3 h-3" onClick={handelLike}>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.41301 13.8736C8.18634 13.9536 7.81301 13.9536 7.58634 13.8736C5.65301 13.2136 1.33301 10.4602 1.33301 5.79356C1.33301 3.73356 2.99301 2.06689 5.03967 2.06689C6.25301 2.06689 7.32634 2.65356 7.99967 3.56023C8.67301 2.65356 9.75301 2.06689 10.9597 2.06689C13.0063 2.06689 14.6663 3.73356 14.6663 5.79356C14.6663 10.4602 10.3463 13.2136 8.41301 13.8736Z"
                  className={`stroke-[#F44336]  dark:stroke-[#D32F2F] ${
                    currentUserIsLike
                      ? "fill-[#F44336] dark:fill-[#D32F2F]"
                      : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[#455A64] dark:text-gray-400 mr-3 ">پاسخ</p>
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

          {replyCount ? (
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
      {showReplies && (
        <>
          {/* <ReplayComment /> */}
          {data?.map((item, index) => {
            return (
              <ReplayComment
                key={index}
                title={item?.title}
                describe={item?.describe}
                autor={item?.autor}
                likeCount={item?.likeCount}
                id={item?.id}
                currentUserIsLike={item?.currentUserIsLike}
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

export { Comment };
