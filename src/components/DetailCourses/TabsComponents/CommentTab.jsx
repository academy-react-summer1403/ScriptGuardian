import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { Form, useParams } from "react-router-dom";
import commentProfile from "../../../images/NewsDetails/Unsplash-Avatars_0005s_0017_harps-joseph-tAvpDE7fXgY-unsplash.png";
import {
  useAddCommentCourse,
  useCommentCourses,
} from "../../../core/services/api/DetailCourses/handelCommentCourses";
import { CourseComment } from "./CommentChilderen/CourseComment";
import { getItem } from "../../../core/services/storage/storage.services";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
const CommentTab = ({ activeTab }) => {
  const queryClient = useQueryClient();

  const [visibleCount, setVisibleCount] = useState(5);

  // تعداد کامنت‌هایی که به‌ازای هر کلیک بیشتر نمایش داده می‌شوند
  const incrementCount = 5;
  //API
  const { id } = useParams();
  const { data } = useCommentCourses(id);
  // console.log(data, " This Data Of Comment Course  ");

  const roles = localStorage.getItem("roles");

  //API ADD COMMENT
  const { mutate: AddComment } = useAddCommentCourse();
  const formik = useFormik({
    initialValues: {
      CourseId: id,
      Title: "",
      Describe: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("CourseId", values.CourseId);
      formData.append("Title", values.Title);
      formData.append("Describe", values.Describe);
      // const formData = new FormData();
      // for (const key in values) {
      //   formData.append(key, values[key]);
      // }
      AddComment(formData, {
        onSuccess: (data) => {
          if (data.success === true) {
            // if (roles.includes("Administrator") || roles.includes("Referee")) {

            // }
            queryClient.invalidateQueries("CommentCourses");

            toast.success("کامنت  با موفقیت ارسال شد");
            resetForm();

            // else {
            //   toast.warning("کامنت ارسال شد در انتظار تایید", data);
            // }
          } else {
            toast.error("خطا در ارسال کامنت");
          }
        },
      });
    },
  });
  return (
    <>
      {activeTab === "comments" && (
        <div className="xl:w-[779px]  w-full  flex flex-col items-center mb-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="w-full flex justify-center  flex-col">
              <input
                className="xl:w-[779px] w-full h-[50px] pt-1 pr-3 border rounded-[10px] mx-auto  dark:border-gray-950 dark:bg-slate-900  outline-none dark:caret-white sm:placeholder:text-base placeholder:text-xs mb-5 text-white"
                placeholder="نظر خودتو بنویس..."
                {...formik.getFieldProps("Title")}
              />
              <textarea
                className="xl:w-[779px] w-full h-[100px] pt-3 pr-3 border rounded-[10px] mx-auto  dark:border-gray-950 dark:bg-slate-900  outline-none dark:caret-white sm:placeholder:text-base placeholder:text-xs text-white"
                placeholder="نظر خودتو بنویس..."
                {...formik.getFieldProps("Describe")}
              />

              <button
                type="submit"
                className="sm:w-[84px] w-[64px] h-[48px] mx-auto bg-[#2196F3] dark:bg-[#1565C0] text-white rounded-[80px] mt-4 sm:text-base text-xs "
              >
                ارسال
              </button>
            </div>
          </form>
          <div className="xl:w-[778px] w-full mt-[24px] flex flex-col">
            {data &&
              data?.slice(0, visibleCount).map((item, index) => {
                return (
                  <>
                    <CourseComment
                      key={index}
                      isLastVisible={
                        index === visibleCount - 1 &&
                        visibleCount < data?.length
                      }
                      onShowMore={() =>
                        setVisibleCount((prev) => prev + incrementCount)
                      }
                      author={item?.author}
                      title={item?.title}
                      describe={item?.describe}
                      pictureAddress={item?.pictureAddress}
                      acceptReplysCount={item?.acceptReplysCount}
                      index={index}
                      courseId={item?.courseId}
                      CommentId={item?.id}
                      likeCount={item?.likeCount}
                      dissLikeCount={item?.disslikeCount}
                      currentUserEmotion={item?.currentUserEmotion}
                      roles={roles}
                      currentUserLikeId={item?.currentUserLikeId}
                    />
                  </>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export { CommentTab };
