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

  // تعداد کامنت‌هایی که به‌ازای هر کلیک بیشتر نمایش داده می‌شوند
  const incrementCount = 5;

  //API
  const { mutate: postComment } = useAddCommentForNews();
  const userId = getItem("id");
  const roles = getItem("roles");
  console.log(roles, "sssssss");
  const formik = useFormik({
    initialValues: {
      newsId: newsId,
      userIpAddress: "1",
      title: "",
      describe: "",
      userId: userId,
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

  return (
    <div className="container mx-auto ">
      <div className="xl:w-[842px] w-[95%] min-h-[891px] bg-white dark:bg-gray-900 mx-auto mt-16 flex flex-col items-center rounded-3xl">
        <h2 className="font-[700] md:text-[24px] text-[18px] text-[#263238] dark:text-gray-200 mt-[32px]">
          نظرکاربران درباره این مقالهي
        </h2>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="w-full flex justify-center  flex-col">
            <div className=" mt-[24px]  flex flex-col ">
              {/* <label htmlFor="title" className="dark:text-white ">
                عنوان کامنت
              </label> */}
              <input
                className="xl:w-[779px] w-[95%] h-[50px]  pr-3 border rounded-[10px] mx-auto dark:border-gray-950 dark:bg-slate-900 bg-slate-100  outline-none dark:caret-white dark:text-white"
                placeholder=" عنوان نظر خودتو بنویس..."
                {...formik.getFieldProps("title")}
              />
            </div>
            <textarea
              className="xl:w-[779px] w-[95%] h-[100px] pt-3 pr-3 border rounded-[10px] mx-auto mt-[24px] dark:border-gray-950 dark:bg-slate-900 bg-slate-100  outline-none dark:caret-white dark:text-white"
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
          {commentDtos?.slice(0, visibleCount).map((item, index) => {
            return (
              <Comment
                key={index}
                title={item?.title}
                describe={item?.describe}
                likeCount={item?.likeCount}
                currentUserIsLike={item?.currentUserIsLike}
                autor={item?.autor}
                replyCount={item?.replyCount}
                id={item?.id}
                newsId={item?.newsId}
                isLastVisible={
                  index === visibleCount - 1 &&
                  visibleCount < commentDtos.length
                }
                onShowMore={() =>
                  setVisibleCount((prev) => prev + incrementCount)
                }
                userId={userId}
                roles={roles}
                parentId={item?.parentId}
                currentUserLikeId={item?.currentUserLikeId}
                currentUserIsDissLike={item?.currentUserIsDissLike}
                dissLikeCount={item?.dissLikeCount}
                inserDate={item?.inserDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { CommentDetails };
