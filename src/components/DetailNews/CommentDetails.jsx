import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DetailsBigImage from "../../images/NewsDetails/Rectangle 34.png";
import DetailsSmallImage from "../../images/NewsDetails/Rectangle 16.png";
import Poster from "../../images/NewsDetails/Poster.png";
import { Form, Formik, useFormik } from "formik";
import commentProfile from "../../images/NewsDetails/Unsplash-Avatars_0005s_0017_harps-joseph-tAvpDE7fXgY-unsplash.png";
import { Comment } from "./comment";
import { getItem } from "../../core/services/storage/storage.services";
import { useAddCommentForNews } from "../../core/services/api/DetailNews/handelNewsComment";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
const CommentDetails = ({ commentDtos, newsId }) => {
  const queryClient = useQueryClient();

  const [visibleCount, setVisibleCount] = useState(5);

  //API
  const { mutate: postComment } = useAddCommentForNews();
  const id = getItem("id");
  const roles = getItem("roles");
  console.log(roles, "sssssss");
  const formik = useFormik({
    initialValues: {
      newsId: newsId,
      userIpAddress: "1",
      title: "تست تست تست تست",
      describe: "",
      userId: id,
    },
    onSubmit: (values, { resetForm }) => {
      postComment(values, {
        onSuccess: (data) => {
          if (data.success === true) {
            if (roles.includes("Administrator") || roles.includes("Referee")) {
              toast.success("کامنت با موفقیت ارسال شد", data);
            } else {
              toast.warning("کامنت ارسال شد در انتظار تایید", data);
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

  // تعداد کامنت‌هایی که به‌ازای هر کلیک بیشتر نمایش داده می‌شوند
  const incrementCount = 5;

  return (
    <div className="container mx-auto ">
      <div className="xl:w-[842px] w-[95%] min-h-[891px] bg-white dark:bg-gray-900 mx-auto mt-16 flex flex-col items-center rounded-3xl">
        <h2 className="font-[700] md:text-[24px] text-[18px] text-[#263238] dark:text-gray-200 mt-[32px]">
          نظرکاربران درباره این مقالهي
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full flex justify-center  flex-col">
            <textarea
              className="xl:w-[779px] w-[95%] h-[100px] pt-3 pr-3 border rounded-[10px] mx-auto mt-[24px] dark:border-gray-950 dark:bg-slate-900 bg-slate-100  outline-none dark:caret-white"
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
        <div className="xl:w-[778px] w-[95%] mt-[24px] flex flex-col">
          {/* Comment */}
          {/* <div className="w-full  sm:min-h-[92px] flex   flex-col">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center ">
                {" "}
                <img
                  src={commentProfile}
                  alt=""
                  className="rounded-full sm:w-8 sm:h-8 w-6 h-6"
                />
                <span className="text-[#263238] dark:text-gray-200 sm:mr-2 mr-1 sm:text-base text-xs">
                  محمد زمانی
                </span>
              </div>
              <p className="sm:text-xs text-[10px] text-[#607D8B] dark:text-gray-400">
                2 روز پیش
              </p>
            </div>
            <p className="sm:text-sm text-xs text-[#455A64] dark:text-gray-400 mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون.
            </p>
            <div className="flex items-center sm:text-sm text-xs mt-3">
              <p className="text-[#F44336] dark:text-[#D32F2F]">7</p>
              <span className="mr-1 sm:w-4 sm:h-4 w-3 h-3">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.41301 13.8736C8.18634 13.9536 7.81301 13.9536 7.58634 13.8736C5.65301 13.2136 1.33301 10.4602 1.33301 5.79356C1.33301 3.73356 2.99301 2.06689 5.03967 2.06689C6.25301 2.06689 7.32634 2.65356 7.99967 3.56023C8.67301 2.65356 9.75301 2.06689 10.9597 2.06689C13.0063 2.06689 14.6663 3.73356 14.6663 5.79356C14.6663 10.4602 10.3463 13.2136 8.41301 13.8736Z"
                    className="fill-[#F44336] stroke-[#F44336] dark:fill-[#D32F2F] dark:stroke-[#D32F2F]"
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
          </div> */}
          {commentDtos?.slice(0, visibleCount).map((item, index) => {
            return (
              <Comment
                key={index}
                title={item.title}
                describe={item.describe}
                likeCount={item.likeCount}
                currentUserIsLike={item.currentUserIsLike}
                autor={item.autor}
                replyCount={item.replyCount}
                id={item.id}
                isLastVisible={
                  index === visibleCount - 1 &&
                  visibleCount < commentDtos.length
                }
                onShowMore={() =>
                  setVisibleCount((prev) => prev + incrementCount)
                }
              />
            );
          })}

          {/* {commentDtos?.map((item, index) => {
            return (
              <>
                <Comment
                  key={index}
                  title={item.title}
                  describe={item.describe}
                  likeCount={item.likeCount}
                  currentUserIsLike={item.currentUserIsLike}
                  autor={item.autor}
                  replyCount={item.replyCount}
                  id={item.id}
                />
              </>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export { CommentDetails };
