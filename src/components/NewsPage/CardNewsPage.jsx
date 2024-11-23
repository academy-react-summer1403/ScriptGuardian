import React from "react";
import News from "../../images/NewsAndArticle/photo1.png";
import { useNavigate } from "react-router-dom";
import image from "../../images/NewsDetails/default_image.png";
import { convertIsoToJalali } from "../../core/utils/dateUtils";

const CardNewsPage = ({
  id,
  title,
  miniDescribe,
  addUserProfileImage,
  currentView,
  currentRate,
  updateDate,
}) => {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate(`/News/${id}`);
  };

  const totalStars = 5; // تعداد کل ستاره‌ها

  const handleClickTitle = (e) => {
    e.stopPropagation(); // جلوگیری از پیشرفت رویداد کلیک
  };

  return (
    <div
      className=" lg:w-[405px]  w-[90%] sm:h-[447px] last:mb-5 cursor-pointer "
      onClick={navigateDetails}
    >
      <div className=" h-[280px] lg:w-[405px]">
        <img
          src={
            addUserProfileImage && addUserProfileImage !== "Not-set"
              ? addUserProfileImage
              : image
          }
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col text-[] lg:w-[405px]">
        <h2 className="mt-[24px] text-[#263238] dark:text-gray-200 font-[700] text-[20px]">
          {title}
        </h2>
        <p className="mt-2 text-[#455A64] dark:text-gray-400">{miniDescribe}</p>

        <div
          className="mt-[18px] flex items-center text-[14px] text-[#2196F3] dark:text-[#1976D2] justify-between"
          onClick={handleClickTitle}
        >
          <div className="flex items-center">
            {" "}
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.08829 7.00044C9.08829 8.15544 8.15495 9.08878 6.99995 9.08878C5.84495 9.08878 4.91162 8.15544 4.91162 7.00044C4.91162 5.84544 5.84495 4.91211 6.99995 4.91211C8.15495 4.91211 9.08829 5.84544 9.08829 7.00044Z"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.00003 11.8241C9.0592 11.8241 10.9784 10.6108 12.3142 8.51075C12.8392 7.68825 12.8392 6.30575 12.3142 5.48325C10.9784 3.38325 9.0592 2.16992 7.00003 2.16992C4.94086 2.16992 3.0217 3.38325 1.68586 5.48325C1.16086 6.30575 1.16086 7.68825 1.68586 8.51075C3.0217 10.6108 4.94086 11.8241 7.00003 11.8241Z"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mr-1">{currentView} بازدید</p>
            <span className="mr-4">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="6" height="6" rx="3" fill="#2196F3" />
              </svg>
            </span>
            <span className="mr-4">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66663 1.16699V2.91699"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33337 1.16699V2.91699"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.04163 5.30273H11.9583"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.25 4.95866V9.91699C12.25 11.667 11.375 12.8337 9.33333 12.8337H4.66667C2.625 12.8337 1.75 11.667 1.75 9.91699V4.95866C1.75 3.20866 2.625 2.04199 4.66667 2.04199H9.33333C11.375 2.04199 12.25 3.20866 12.25 4.95866Z"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.99732 7.99186H7.00256"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.83839 7.99186H4.84363"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.83839 9.74186H4.84363"
                  className="stroke-[#2196F3] dark:stroke-[ #1976D2]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>{updateDate && convertIsoToJalali(updateDate)}</strong>
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
      </div>
    </div>
  );
};

export { CardNewsPage };
