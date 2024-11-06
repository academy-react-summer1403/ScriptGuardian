import React from "react";
import { BigImgNews } from "./BigImgNews";
import { useNavigate } from "react-router-dom";
const BigNews = ({
  title,
  addUserProfileImage,
  miniDescribe,
  currentView,
  id,
  currentRate,
}) => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate(`/news/${id}`);
  };

  //handel stars
  const totalStars = 5; // تعداد کل ستاره‌ها

  const handleClickTitle = (e) => {
    e.stopPropagation(); // جلوگیری از پیشرفت رویداد کلیک
  };

  //API

  return (
    <div
      className="xl:w-[616px]   flex flex-col xl:mx-auto  md:w-full items-center xl:items-start w-[90%]"
      onClick={goDetails}
    >
      <BigImgNews addUserProfileImage={addUserProfileImage} />
      <div
        className="flex justify-between w-full items-center md:mt-8 mt-4 "
        onClick={handleClickTitle}
      >
        <div className="flex items-center">
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
            {currentView} بازدید{" "}
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
        <div className="flex flex-row-reverse">
          {Array.from({ length: totalStars }).map((_, index) => (
            <span key={index}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z"
                  className={`stroke-[#FFC107] dark:stroke-[#FF8F00] ${
                    index < currentRate
                      ? "fill-[#FFC107] dark:fill-[#FF8F00]"
                      : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          ))}
        </div>
      </div>

      <h2 className="mt-[24px] text-[#263238] dark:text-gray-400 font-[700] sm:text-[32px] text-[18px] ">
        {title}
      </h2>
      <p className="mt-[12px] text-[#455A64] dark:text-gray-200 font-[500] xl:w-auto sm:w-[516px] w-full xl:text-right text-center ">
        {miniDescribe}
      </p>
    </div>
  );
};

export { BigNews };
