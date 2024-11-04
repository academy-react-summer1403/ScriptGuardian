import React from "react";
import BigImage2 from "../../images/CoursesDetails/Rectangle 85.png";

const BigImage = ({ imageAddress }) => {
  return (
    <div className="w-full xl:h-[548px] relative ">
      <img src={imageAddress} alt="" className="w-full h-full rounded-2xl " />
      <div className="absolute sm:w-[78px] w-[58px] rounded-3xl justify-center items-center  h-[48px] bg-white dark:bg-gray-900 cursor-pointer flex sm:top-8 sm:right-8 top-4 right-4">
        <span className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
              className="fill-[#F44336] stroke-[#F44336] dark:fill-[#D32F2F] dark:stroke-[#D32F2F]"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-[#F44336] dark:text-[#D32F2F] sm:text-2xl text-lg mr-[6px]">
          3
        </p>
      </div>

      <div className="absolute sm:w-[117px] w-[87px] rounded-3xl justify-center items-center  h-[48px] bg-white dark:bg-gray-900 flex sm:bottom-8 bottom-2 left-2 sm:left-8">
        <span className="sm:w-[24] sm:h-[24px] w-5 h-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
              className="stroke-[#263238] dark:stroke-gray-200"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977"
              className="stroke-[#263238] dark:stroke-gray-200"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-[#263238] dark:text-gray-200  sm:mr-[6px] mr-1 sm:text-base text-xs">
          14 ساعت
        </p>
      </div>
      <div className="absolute sm:w-[119px] w-[89px] rounded-3xl justify-center items-center  h-[48px] bg-white dark:bg-gray-900 flex sm:bottom-8 bottom-2  sm:left-[165px] left-[100px]">
        <span className="sm:w-[24px] sm:h-[24px] w-5 h-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z"
              className="stroke-[#263238] dark:stroke-gray-200"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0599 19.3901C14.4399 19.8101 13.6599 20.1601 12.7099 20.4701L11.1299 20.9901C7.15985 22.2701 5.06985 21.2001 3.77985 17.2301L2.49985 13.2801C1.21985 9.3101 2.27985 7.2101 6.24985 5.9301L7.82985 5.4101C8.23985 5.2801 8.62985 5.1701 8.99985 5.1001C8.69985 5.7101 8.45985 6.4501 8.25985 7.3001L7.27985 11.4901C6.29985 15.6701 7.58985 17.7301 11.7599 18.7201L13.4399 19.1201C14.0199 19.2601 14.5599 19.3501 15.0599 19.3901Z"
              className="stroke-[#263238] dark:stroke-gray-200"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6401 8.52979L17.4901 9.75979"
              className="stroke-[#263238] dark:stroke-gray-200"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6602 12.3999L14.5602 13.1399"
              className="stroke-[#263238] dark:stroke-gray-200"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-[#263238] dark:text-gray-200  sm:mr-[6px] mr-1 sm:text-base text-xs">
          202 درس
        </p>
      </div>
    </div>
  );
};

export { BigImage };
