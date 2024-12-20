import React from "react";

const SearchInput = () => {
  return (
    <div className="relative  mt-[48px] flex items-center md:w-[724px] w-[85%] h-[56px]">
      <input
        type="text"
        className="w-full px-[20px] py-[15.5px]  h-full border-gray-300 rounded-[16px] focus:outline-none dark:bg-gray-900 dark:caret-white dark:placeholder-white dark:text-white  z-0"
        placeholder="چی میخوای یادبگیری؟"
      />

      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 w-5 h-5 text-gray-500"
      >
        <path
          opacity="0.4"
          d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
          fill="#2196F3"
        />
        <path
          d="M21.3001 22.5001C21.1201 22.5001 20.9401 22.4301 20.8101 22.3001L18.9501 20.4401C18.6801 20.1701 18.6801 19.7301 18.9501 19.4501C19.2201 19.1801 19.6601 19.1801 19.9401 19.4501L21.8001 21.3101C22.0701 21.5801 22.0701 22.0201 21.8001 22.3001C21.6601 22.4301 21.4801 22.5001 21.3001 22.5001Z"
          fill="#2196F3"
        />
      </svg>
    </div>
  );
};

export default SearchInput;
