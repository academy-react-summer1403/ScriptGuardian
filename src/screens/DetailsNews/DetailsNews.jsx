import React from "react";
import { Form, useParams } from "react-router-dom";
import DetailsBigImage from "../../images/NewsDetails/Rectangle 34.png";
import DetailsSmallImage from "../../images/NewsDetails/Rectangle 16.png";
import Poster from "../../images/NewsDetails/Poster.png";
import { TopDetails } from "../../components/DetailNews/TopDetails";
import { MidDetails } from "../../components/DetailNews/MidDetails";
import { Formik } from "formik";
import commentProfile from "../../images/NewsDetails/Unsplash-Avatars_0005s_0017_harps-joseph-tAvpDE7fXgY-unsplash.png";
const DetailsNews = () => {
  const { id } = useParams();
  console.log(id, "id");
  return (
    <>
      <TopDetails />
      <MidDetails />
      <div className="w-[842px] h-[891px] bg-white dark:bg-gray-900 mx-auto mt-16 flex flex-col items-center rounded-3xl">
        <h2 className="font-[700] text-[24px] text-[#263238] dark:text-gray-200 mt-[32px]">
          نظرکاربران درباره این مقالهي
        </h2>
        <Formik>
          <Form className="w-full flex justify-center  flex-col">
            <textarea
              className="w-[779px] h-[100px] pt-3 pr-3 border rounded-[10px] mx-auto mt-[24px] dark:border-gray-950 bg-slate-900  outline-none dark:caret-white"
              placeholder="نظر خودتو بنویس..."
            />

            <button
              type="submit"
              className="w-[84px] h-[48px] mx-auto bg-[#2196F3] dark:bg-[#1565C0] text-white rounded-[80px] mt-4 "
            >
              ارسال
            </button>
          </Form>
        </Formik>

        <div className="w-[778px] h-[570px] mt-[24px] flex flex-col">
          {/* Comment */}
          <div className="w-full  min-h-[92px] flex  flex-col">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center ">
                {" "}
                <img
                  src={commentProfile}
                  alt=""
                  className="rounded-full w-8 h-8"
                />
                <span className="text-[#263238] dark:text-gray-200 mr-2">
                  محمد زمانی
                </span>
              </div>
              <p className="text-xs text-[#607D8B] dark:text-gray-400">
                2 روز پیش
              </p>
            </div>
            <p className="text-sm text-[#455A64] dark:text-gray-400 mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون.
            </p>
            <div className="flex items-center text-sm mt-3">
              <p className="text-[#F44336] dark:text-[#D32F2F]">7</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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
              <p className="text-[#455A64] dark:text-gray-400 mr-3">پاسخ</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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

          {/* Replay */}
          <div className="w-[722px]  min-h-[92px] flex  flex-col mr-[31px] mt-6 border-r  border-[#CFD8DC] dark:border-[#B0BEC5] ">
            <div className="flex justify-between items-center w-full mr-4">
              <div className="flex items-center ">
                {" "}
                <img
                  src={commentProfile}
                  alt=""
                  className="rounded-full w-8 h-8"
                />
                <span className="text-[#263238] dark:text-gray-200 mr-2">
                  محمد زمانی
                </span>
              </div>
              <p className="text-xs text-[#607D8B] dark:text-gray-400">
                2 روز پیش
              </p>
            </div>
            <p className="text-sm text-[#455A64] dark:text-gray-400 mt-2 mr-4">
              <span className="text-[#2196F3] dark:text-[#1976D2]">
                @محمد زمانی{" "}
              </span>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون.
            </p>
            <div className="flex items-center text-sm mt-3 mr-4">
              <p className="text-[#F44336] dark:text-[#D32F2F]">7</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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
              <p className="text-[#455A64] dark:text-gray-400 mr-3">پاسخ</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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

          <div className="w-[722px]  min-h-[92px] flex  flex-col mr-[31px] mt-4 border-r  border-[#CFD8DC] dark:border-[#B0BEC5] ">
            <div className="flex justify-between items-center w-full mr-4">
              <div className="flex items-center ">
                {" "}
                <img
                  src={commentProfile}
                  alt=""
                  className="rounded-full w-8 h-8"
                />
                <span className="text-[#263238] dark:text-gray-200 mr-2">
                  محمد زمانی
                </span>
              </div>
              <p className="text-xs text-[#607D8B] dark:text-gray-400">
                2 روز پیش
              </p>
            </div>
            <p className="text-sm text-[#455A64] dark:text-gray-400 mt-2 mr-4">
              <span className="text-[#2196F3] dark:text-[#1976D2]">
                @محمد زمانی{" "}
              </span>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون.
            </p>
            <div className="flex items-center text-sm mt-3 mr-4">
              <p className="text-[#F44336] dark:text-[#D32F2F]">7</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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
              <p className="text-[#455A64] dark:text-gray-400 mr-3">پاسخ</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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

          {/* Comment */}
          <div className="w-full  min-h-[92px] flex  flex-col mt-6">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center ">
                {" "}
                <img
                  src={commentProfile}
                  alt=""
                  className="rounded-full w-8 h-8"
                />
                <span className="text-[#263238] dark:text-gray-200 mr-2">
                  محمد زمانی
                </span>
              </div>
              <p className="text-xs text-[#607D8B] dark:text-gray-400">
                2 روز پیش
              </p>
            </div>
            <p className="text-sm text-[#455A64] dark:text-gray-400 mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون.
            </p>
            <div className="flex items-center text-sm mt-3">
              <p className="text-[#F44336] dark:text-[#D32F2F]">7</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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
              <p className="text-[#455A64] dark:text-gray-400 mr-3">پاسخ</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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

          {/* Comment */}
          <div className="w-full  min-h-[92px] flex  flex-col mt-6">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center ">
                {" "}
                <img
                  src={commentProfile}
                  alt=""
                  className="rounded-full w-8 h-8"
                />
                <span className="text-[#263238] dark:text-gray-200 mr-2">
                  محمد زمانی
                </span>
              </div>
              <p className="dark:text-[#1565C0] text-[#2196F3] text-sm">مشاهده 12 نظر دیگر</p>
              <p className="text-xs text-[#607D8B] dark:text-gray-400">
                2 روز پیش
              </p>
            </div>
            <p className="text-sm text-[#455A64] dark:text-gray-400 mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون.
            </p>
            <div className="flex items-center text-sm mt-3">
              <p className="text-[#F44336] dark:text-[#D32F2F]">7</p>
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
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
        </div>
      </div>
    </>
  );
};

export { DetailsNews };
