import React from "react";
import { convertIsoToJalali } from "../../../../core/utils/dateUtils";
import { convertEnToPe } from "persian-number";

const CourseInfo = ({ lastUpdate }) => {
  return (
    <div className="flex justify-center">
      <div className="xl:w-[264px] lg:w-[90%] w-[264px] h-[40px] bg-[#ECEFF1] dark:bg-[#1E1E1E] flex  rounded-[24px] text-[12px] font-[500] items-center gap-x-[24px] mt-3 tracking-tighter xl:justify-start lg:justify-around justify-start">
        <span className="xl:flex items-center mr-4 gap-1  lg:hidden  flex">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:block"
          >
            <path
              d="M12.635 6.0898L12.0633 8.52813C11.5733 10.634 10.605 11.4856 8.785 11.3106C8.49334 11.2873 8.17834 11.2348 7.84 11.1531L6.86 10.9198C4.4275 10.3423 3.675 9.14063 4.24667 6.7023L4.81834 4.25813C4.935 3.7623 5.075 3.33063 5.25 2.9748C5.9325 1.56313 7.09334 1.18397 9.04167 1.6448L10.0158 1.8723C12.46 2.44397 13.2067 3.65147 12.635 6.0898Z"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.78502 11.3109C8.42335 11.5559 7.96835 11.7601 7.41418 11.9409L6.49252 12.2443C4.17668 12.9909 2.95752 12.3668 2.20502 10.0509L1.45835 7.74676C0.711683 5.43093 1.33002 4.20593 3.64585 3.45926L4.56752 3.15593C4.80668 3.0801 5.03418 3.01593 5.25002 2.9751C5.07502 3.33093 4.93502 3.7626 4.81835 4.25843L4.24668 6.7026C3.67502 9.14093 4.42752 10.3426 6.86002 10.9201L7.84002 11.1534C8.17835 11.2351 8.49335 11.2876 8.78502 11.3109Z"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.37335 4.97607L10.2025 5.69357"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.8017 7.2334L8.49336 7.66507"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            {" "}
            درس
            {convertEnToPe("202")}
          </span>
        </span>
        <span className="flex items-center gap-1">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8334 7.49984C12.8334 10.7198 10.22 13.3332 7.00002 13.3332C3.78002 13.3332 1.16669 10.7198 1.16669 7.49984C1.16669 4.27984 3.78002 1.6665 7.00002 1.6665C10.22 1.6665 12.8334 4.27984 12.8334 7.49984Z"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            {" "}
            {convertEnToPe("14")}
            ساعت
          </span>
        </span>
        <span className="flex items-center gap-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66669 1.1665V2.9165"
              className="stroke-[#263238] dark:stroke-white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.33331 1.1665V2.9165"
              className="stroke-[#263238] dark:stroke-white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.04169 5.30273H11.9584"
              className="stroke-[#263238] dark:stroke-white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.25 4.95817V9.9165C12.25 11.6665 11.375 12.8332 9.33333 12.8332H4.66667C2.625 12.8332 1.75 11.6665 1.75 9.9165V4.95817C1.75 3.20817 2.625 2.0415 4.66667 2.0415H9.33333C11.375 2.0415 12.25 3.20817 12.25 4.95817Z"
              className="stroke-[#263238] dark:stroke-white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.99739 7.99186H7.00263"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.83833 7.99186H4.84357"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.83833 9.74186H4.84357"
              className="stroke-[#263238] dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <strong>
            {lastUpdate && convertEnToPe(convertIsoToJalali(lastUpdate))}
          </strong>
        </span>
      </div>
    </div>
  );
};

export { CourseInfo };
