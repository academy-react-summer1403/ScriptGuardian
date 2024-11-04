import React from "react";
import News from "../../images/NewsAndArticle/photo1.png";
import { useNavigate } from "react-router-dom";
const CardNewsPage = ({
  id,
  title,
  miniDescribe,
  addUserProfileImage,
  currentView,
}) => {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate(`/News/${id}`);
  };
  return (
    <div
      className=" lg:w-[405px]  w-[90%] sm:h-[447px] last:mb-5 cursor-pointer "
      onClick={navigateDetails}
    >
      <div className=" h-[280px] lg:w-[405px]">
        <img src={addUserProfileImage} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col text-[] lg:w-[405px]">
        <h2 className="mt-[24px] text-[#263238] dark:text-gray-200 font-[700] text-[20px]">
        {title}
            </h2>
        <p className="mt-2 text-[#455A64] dark:text-gray-400">
        {miniDescribe}
        </p>
        <div className="w-auto flex text-[#2196F3] dark:text-[#1565C0] mt-4 items-center  text-[14px] tracking-tighter ">
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.08829 6.99995C9.08829 8.15495 8.15495 9.08829 6.99995 9.08829C5.84495 9.08829 4.91162 8.15495 4.91162 6.99995C4.91162 5.84495 5.84495 4.91162 6.99995 4.91162C8.15495 4.91162 9.08829 5.84495 9.08829 6.99995Z"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.99991 11.8241C9.05908 11.8241 10.9782 10.6108 12.3141 8.51075C12.8391 7.68825 12.8391 6.30575 12.3141 5.48325C10.9782 3.38325 9.05908 2.16992 6.99991 2.16992C4.94074 2.16992 3.02158 3.38325 1.68574 5.48325C1.16074 6.30575 1.16074 7.68825 1.68574 8.51075C3.02158 10.6108 4.94074 11.8241 6.99991 11.8241Z"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
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
              <rect
                width="6"
                height="6"
                rx="3"
                className="fill-[#2196F3] dark:fill-[#1565C0]"
              />
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
                d="M4.66675 1.1665V2.9165"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33325 1.1665V2.9165"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.04175 5.30273H11.9584"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.25 4.95817V9.9165C12.25 11.6665 11.375 12.8332 9.33333 12.8332H4.66667C2.625 12.8332 1.75 11.6665 1.75 9.9165V4.95817C1.75 3.20817 2.625 2.0415 4.66667 2.0415H9.33333C11.375 2.0415 12.25 3.20817 12.25 4.95817Z"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.99745 7.99186H7.00269"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.83827 7.99186H4.84351"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.83827 9.74186H4.84351"
                className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="mr-1">1402/7/2</p>
        </div>
      </div>
    </div>
  );
};

export { CardNewsPage };
