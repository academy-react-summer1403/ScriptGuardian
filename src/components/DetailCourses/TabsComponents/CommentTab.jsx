import { Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import commentProfile from "../../../images/NewsDetails/Unsplash-Avatars_0005s_0017_harps-joseph-tAvpDE7fXgY-unsplash.png";
const CommentTab = ({ activeTab }) => {
  return (
    <>
      {activeTab === "comments" && (
        <div className="md:w-[779px]  w-full  flex flex-col items-center ">
          <Formik>
            <Form className="w-full flex justify-center  flex-col">
              <textarea
                className="md:w-[779px] w-full h-[100px] pt-3 pr-3 border rounded-[10px] mx-auto  dark:border-gray-950 dark:bg-slate-900  outline-none dark:caret-white sm:placeholder:text-base placeholder:text-xs"
                placeholder="نظر خودتو بنویس..."
              />

              <button
                type="submit"
                className="sm:w-[84px] w-[64px] h-[48px] mx-auto bg-[#2196F3] dark:bg-[#1565C0] text-white rounded-[80px] mt-4 sm:text-base text-xs "
              >
                ارسال
              </button>
            </Form>
          </Formik>

          <div className="md:w-[778px] w-full mt-[24px] flex flex-col">
            {/* Comment */}
            <div className="w-full  sm:min-h-[92px] flex  flex-col">
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
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون.
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
            </div>

            {/* Replay */}
            <div className="md:w-[722px]  w-[92%]   flex  flex-col sm:mr-[31px] mr-3 mt-6 border-r  border-[#CFD8DC] dark:border-[#B0BEC5] ">
              <div className="flex justify-between items-center w-full sm:mr-4 mr-2">
                <div className="flex items-center ">
                  {" "}
                  <img
                    src={commentProfile}
                    alt=""
                    className="rounded-full sm:w-8 sm:h-8 w-6 h-6"
                  />
                  <span className="text-[#263238] dark:text-gray-200 mr-2">
                    محمد زمانی
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
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون.
              </p>
              <div className="flex items-center text-sm mt-3 sm:mr-4 mr-2">
                <p className="text-[#F44336] dark:text-[#D32F2F] sm:text-[16px] text-xs">
                  7
                </p>
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
                <p className="text-[#455A64] dark:text-gray-400 mr-3 sm:text-base text-xs">
                  پاسخ
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

            {/* Replay */}

            <div className="md:w-[722px]   w-[92%]   flex  flex-col sm:mr-[31px] mr-3 mt-6 border-r  border-[#CFD8DC] dark:border-[#B0BEC5] ">
              <div className="flex justify-between items-center w-full sm:mr-4 mr-2">
                <div className="flex items-center ">
                  {" "}
                  <img
                    src={commentProfile}
                    alt=""
                    className="rounded-full sm:w-8 sm:h-8 w-6 h-6"
                  />
                  <span className="text-[#263238] dark:text-gray-200 mr-2">
                    محمد زمانی
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
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون.
              </p>
              <div className="flex items-center text-sm mt-3 sm:mr-4 mr-2">
                <p className="text-[#F44336] dark:text-[#D32F2F] sm:text-[16px] text-xs">
                  7
                </p>
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
                <p className="text-[#455A64] dark:text-gray-400 mr-3 sm:text-base text-xs">
                  پاسخ
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

      

            {/* Comment */}
            <div className="w-full   sm:min-h-[92px] mt-5 flex  flex-col">
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
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون.
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
            </div>

            {/* Comment */}
            <div className="w-full   flex  flex-col mt-6 mb-10 ">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center ">
                  {" "}
                  <img
                    src={commentProfile}
                    alt=""
                    className="rounded-full sm:w-8 w-6  sm:h-8 h-6"
                  />
                  <span className="text-[#263238] dark:text-gray-200 mr-2">
                    محمد زمانی
                  </span>
                </div>
                <p className="dark:text-[#1565C0] text-[#2196F3] sm:text-sm text-xs">
                  مشاهده 12 نظر دیگر
                </p>
                <p className="sm:text-xs text-[10px] text-[#607D8B] dark:text-gray-400">
                  2 روز پیش
                </p>
              </div>
              <p className="sm:text-sm text-xs text-[#455A64] dark:text-gray-400 mt-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون.
              </p>
              <div className="flex items-center sm:text-sm text-xs mt-3">
                <p className="text-[#F44336] dark:text-[#D32F2F]">7</p>
                <span className="mr-1 sm:w-4 w-3 sm:h-4 h-3">
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
      )}
    </>
  );
};

export { CommentTab };
