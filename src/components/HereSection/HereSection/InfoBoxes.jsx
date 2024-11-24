import React from "react";
import { useLandingReport } from "../../../core/services/api/Landing/LandingReport";
const InfoBoxes = () => {
  const { data, isPending } = useLandingReport();

  return (
    <>
      <div
        className="md:w-[220px] sm:w-[150px] flex flex-col  items-center h-[211px] sm:bg-[#ffffff] sm:dark:bg-gray-900 sm:bg-opacity-[60%] sm:dark:bg-opacity-[90%] sm:border-white transition duration-300 ease-in-out  hover:scale-[105%] rounded-[16px] sm:dark:border-gray-900 sm:border-[4px]"
        title="مدرس مجرب"
      >
        <div className="flex items-center justify-center bg-[#2196F3] dark:bg-blue-800  w-[64px] h-[64px] rounded-[16px] mt-[24px] ">
          <span className="">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M30.6334 21.3999V29.6166C30.6334 31.7332 28.9834 33.9999 27 34.6666L21.6834 36.4332C20.75 36.7499 19.2334 36.7499 18.3167 36.4332L13 34.6666C11 33.9999 9.3667 31.7332 9.3667 29.6166L9.38337 21.3999L16.75 26.1999C18.55 27.3832 21.5167 27.3832 23.3167 26.1999L30.6334 21.3999Z"
                fill="white"
              />
              <path
                d="M33.3 10.7666L23.3167 4.2166C21.5167 3.03327 18.55 3.03327 16.75 4.2166L6.7167 10.7666C3.50003 12.8499 3.50003 17.5666 6.7167 19.6666L9.38337 21.3999L16.75 26.1999C18.55 27.3833 21.5167 27.3833 23.3167 26.1999L30.6334 21.3999L32.9167 19.8999V24.9999C32.9167 25.6833 33.4834 26.2499 34.1667 26.2499C34.85 26.2499 35.4167 25.6833 35.4167 24.9999V16.7999C36.0834 14.6499 35.4 12.1499 33.3 10.7666Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col min-w-[92px] min-[83px]  justify-center items-center mt-2 ">
          <h3 className="font-[900] sm:text-[30px] text-[25px] text-[#263238] dark:text-gray-200">
            {data && data.teacherCount}
          </h3>
          <p className="font-[700] text-[20px] text-[#455A64] dark:text-gray-400 sm:block hidden">
            مدرس مجرب
          </p>
        </div>
      </div>
      <div
        className="md:w-[220px] sm:w-[150px] flex flex-col  items-center h-[211px] sm:bg-[#ffffff] sm:dark:bg-gray-900 sm:bg-opacity-[60%] sm:dark:bg-opacity-[90%] sm:border-white transition duration-300 ease-in-out  hover:scale-[105%] rounded-[16px] sm:dark:border-gray-900 sm:border-[4px]"
        title="دوره با کیفیت"
      >
        <div className="flex items-center justify-center bg-[#2196F3] dark:bg-blue-800  w-[64px] h-[64px] rounded-[16px] mt-[24px]  ">
          <span className="">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M20 36.6668C29.2048 36.6668 36.6667 29.2049 36.6667 20.0002C36.6667 10.7954 29.2048 3.3335 20 3.3335C10.7953 3.3335 3.33337 10.7954 3.33337 20.0002C3.33337 29.2049 10.7953 36.6668 20 36.6668Z"
                fill="white"
              />
              <path
                d="M26.1834 26.5499C25.9667 26.5499 25.75 26.4999 25.55 26.3666L20.3834 23.2833C19.1 22.5166 18.15 20.8333 18.15 19.3499V12.5166C18.15 11.8333 18.7167 11.2666 19.4 11.2666C20.0834 11.2666 20.65 11.8333 20.65 12.5166V19.3499C20.65 19.9499 21.15 20.8333 21.6667 21.1333L26.8334 24.2166C27.4334 24.5666 27.6167 25.3333 27.2667 25.9333C27.0167 26.3333 26.6 26.5499 26.1834 26.5499Z"
                fill="white"
              />
            </svg>
          </span>
        </div>

        <div className="flex flex-col min-w-[92px] min-[83px]  justify-center items-center mt-2 ">
          <h3 className="font-[900]  sm:text-[30px] text-[23px]  text-[#263238] dark:text-gray-200">
            {data && data.courseCount}
          </h3>
          <p className="font-[700] text-[20px] text-[#455A64] dark:text-gray-400 sm:block hidden">
            دوره با کیفیت
          </p>
        </div>
      </div>

      <div
        title=" نفر دانشجو"
        className="md:w-[220px] sm:w-[150px] flex flex-col  items-center h-[211px] sm:bg-[#ffffff] sm:dark:bg-gray-900 sm:bg-opacity-[60%] sm:dark:bg-opacity-[90%] sm:border-white transition duration-300 ease-in-out  hover:scale-[105%] rounded-[16px] sm:dark:border-gray-900 sm:border-[4px]"
      >
        <div className="flex items-center justify-center bg-[#2196F3] dark:bg-blue-800  w-[64px] h-[64px] rounded-[16px] mt-[24px] ">
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M29.2166 12.9502C29.0999 12.9335 28.9833 12.9335 28.8666 12.9502C26.2833 12.8668 24.2333 10.7502 24.2333 8.15016C24.2333 5.50016 26.3833 3.3335 29.0499 3.3335C31.6999 3.3335 33.8666 5.48349 33.8666 8.15016C33.8499 10.7502 31.7999 12.8668 29.2166 12.9502Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M34.65 24.5002C32.7833 25.7502 30.1666 26.2168 27.75 25.9002C28.3833 24.5335 28.7166 23.0169 28.7333 21.4169C28.7333 19.7502 28.3666 18.1669 27.6666 16.7835C30.1333 16.4502 32.75 16.9168 34.6333 18.1668C37.2666 19.9002 37.2666 22.7502 34.65 24.5002Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M10.7334 12.9502C10.85 12.9335 10.9667 12.9335 11.0834 12.9502C13.6667 12.8668 15.7167 10.7502 15.7167 8.15016C15.7167 5.50016 13.5667 3.3335 10.9 3.3335C8.25004 3.3335 6.08337 5.48349 6.08337 8.15016C6.10004 10.7502 8.15004 12.8668 10.7334 12.9502Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M10.9166 21.4167C10.9166 23.0333 11.2666 24.5667 11.8999 25.95C9.54995 26.2 7.09995 25.7 5.29995 24.5167C2.66662 22.7667 2.66662 19.9167 5.29995 18.1667C7.08328 16.9667 9.59995 16.4833 11.9666 16.75C11.2833 18.15 10.9166 19.7334 10.9166 21.4167Z"
                fill="white"
              />
              <path
                d="M20.2 26.45C20.0667 26.4333 19.9167 26.4333 19.7667 26.45C16.7 26.35 14.25 23.8333 14.25 20.7333C14.25 17.5667 16.8 15 19.9833 15C23.15 15 25.7167 17.5667 25.7167 20.7333C25.7167 23.8333 23.2833 26.35 20.2 26.45Z"
                fill="white"
              />
              <path
                d="M14.7834 29.8999C12.2667 31.5832 12.2667 34.3499 14.7834 36.0166C17.65 37.9332 22.35 37.9332 25.2167 36.0166C27.7334 34.3332 27.7334 31.5666 25.2167 29.8999C22.3667 27.9832 17.6667 27.9832 14.7834 29.8999Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col min-w-[92px] min-[83px]  justify-center items-center mt-2 ">
          <h3 className="font-[900] sm:text-[30px] text-[23px]  text-[#263238] dark:text-gray-200">
            {data && data.studentCount}
          </h3>
          <p className="font-[700] text-[20px] text-[#455A64] dark:text-gray-400 sm:block hidden">
            نفر دانشجو
          </p>
        </div>
      </div>
    </>
  );
};

export { InfoBoxes };
