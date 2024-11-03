import React, { useState } from "react";

const PriceAndFavorites = ({ handleClickTitle, likeCount, cost }) => {
  const [likes, setLikes] = useState(12);
  const [isLiked, setIsLiked] = useState(false);

  const handelLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const isLikedTrue = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41337 13.8736C8.18671 13.9536 7.81337 13.9536 7.58671 13.8736C5.65337 13.2136 1.33337 10.4602 1.33337 5.79356C1.33337 3.73356 2.99337 2.06689 5.04004 2.06689C6.25337 2.06689 7.32671 2.65356 8.00004 3.56023C8.67337 2.65356 9.75337 2.06689 10.96 2.06689C13.0067 2.06689 14.6667 3.73356 14.6667 5.79356C14.6667 10.4602 10.3467 13.2136 8.41337 13.8736Z"
        fill="#F44336"
        stroke="#F44336"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const isLikedFalse = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41331 13.8736C8.18665 13.9536 7.81331 13.9536 7.58665 13.8736C5.65331 13.2136 1.33331 10.4602 1.33331 5.79356C1.33331 3.73356 2.99331 2.06689 5.03998 2.06689C6.25331 2.06689 7.32665 2.65356 7.99998 3.56023C8.67331 2.65356 9.75331 2.06689 10.96 2.06689C13.0066 2.06689 14.6666 3.73356 14.6666 5.79356C14.6666 10.4602 10.3466 13.2136 8.41331 13.8736Z"
        stroke="#F44336"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div
      className="flex  mt-[14px] justify-between "
      onClick={handleClickTitle}
    >
      <div className="w-[51px] h-[32px] bg-[#FFEBEE] text-[#F44336] dark:bg-[#2E2E2E] dark:text-[#FFCDD2] rounded-[24px] flex items-center justify-center gap-1 mr-[16px]">
        <span onClick={handelLike} className="">
          {isLiked ? isLikedTrue : isLikedFalse}
        </span>
        {likes}
      </div>
      <p className="text-[#2196F3] dark:text-[#BBDEFB] font-[500] tracking-tight">
        {" "}
        {cost}{" "}
        <span className="text-[12px] text-[#263238] dark:text-[#CFD8DC] ml-5">
          تومان
        </span>{" "}
      </p>
    </div>
  );
};

export { PriceAndFavorites };
