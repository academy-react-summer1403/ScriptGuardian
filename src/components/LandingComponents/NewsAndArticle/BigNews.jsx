import React from "react";
import { BigImgNews } from "./BigImgNews";
const BigNews = () => {
  return (
    <div className="xl:w-[616px]   flex flex-col xl:mx-auto  md:w-full items-center xl:items-start w-[90%]">
      <BigImgNews />
      <div className="flex md:mt-8 mt-4">
        <div className="w-[102px] h-[40px] flex bg-[#DAEEFF] dark:bg-[#0A4E9D] rounded-[80px] items-center justify-center text-[#2196F3] dark:text-[#1976D2]">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3867 7.99995C10.3867 9.31995 9.32001 10.3866 8.00001 10.3866C6.68001 10.3866 5.61334 9.31995 5.61334 7.99995C5.61334 6.67995 6.68001 5.61328 8.00001 5.61328C9.32001 5.61328 10.3867 6.67995 10.3867 7.99995Z"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00002 13.5138C10.3534 13.5138 12.5467 12.1271 14.0734 9.72714C14.6734 8.78714 14.6734 7.20714 14.0734 6.26714C12.5467 3.86714 10.3534 2.48047 8.00002 2.48047C5.64668 2.48047 3.45335 3.86714 1.92668 6.26714C1.32668 7.20714 1.32668 8.78714 1.92668 9.72714C3.45335 12.1271 5.64668 13.5138 8.00002 13.5138Z"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          22 بازدید{" "}
        </div>

        <div className="w-[111px] h-[40px] flex bg-[#DAEEFF] dark:bg-[#0A4e9D] rounded-[80px] items-center justify-center text-[#2196F3] dark:text-[#1976D2] mr-[16px]">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33331 1.33301V3.33301"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 1.33301V3.33301"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.33331 6.05957H13.6666"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 5.66634V11.333C14 13.333 13 14.6663 10.6667 14.6663H5.33333C3 14.6663 2 13.333 2 11.333V5.66634C2 3.66634 3 2.33301 5.33333 2.33301H10.6667C13 2.33301 14 3.66634 14 5.66634Z"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99697 9.13314H8.00296"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.52956 9.13314H5.53555"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.52956 11.1331H5.53555"
                className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          1402/7/2
        </div>
      </div>
      <h2 className="mt-[24px] text-[#263238] dark:text-gray-400 font-[700] sm:text-[32px] text-[18px] ">
        چگونه مطالعه موثر را برای شما آسانتر کنیم.
      </h2>
      <p className="mt-[12px] text-[#455A64] dark:text-gray-200 font-[500] xl:w-auto sm:w-[516px] w-full xl:text-right text-center ">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد.
      </p>
    </div>
  );
};

export { BigNews };
