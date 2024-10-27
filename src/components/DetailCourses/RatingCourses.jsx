import React from "react";

const RatingCourses = () => {
  return (
    <div className="w-full sm:h-[48px] flex sm:flex-row flex-col justify-between mt-4 sm:gap-y-0 gap-y-5">
      <div className="flex items-center sm:justify-start justify-between">
        {/* Stars */}
        <div className="flex gap-x-2">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z"
                className="stroke-[#FFC107] dark:stroke-[#FF8F00]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z"
                className="stroke-[#FFC107] dark:stroke-[#FF8F00] fill-[#FFC107] dark:fill-[#FF8F00]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z"
                className="stroke-[#FFC107] dark:stroke-[#FF8F00] fill-[#FFC107] dark:fill-[#FF8F00]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z"
                className="stroke-[#FFC107] dark:stroke-[#FF8F00] fill-[#FFC107] dark:fill-[#FF8F00]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z"
                className="stroke-[#FFC107] dark:stroke-[#FF8F00] fill-[#FFC107] dark:fill-[#FF8F00]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center sm:gap-x-0 gap-x-2">
          <p className="sm:mr-3 text-[#263238] dark:text-gray-200 sm:text-base text-xs">
            امتیاز 20 نفر
          </p>
          <button className="sm:mr-4 h-[32px]  sm:w-[81px] w-[61px] flex justify-center items-center bg-[#2196F3] dark:bg-[#1565C0] text-white shadow-Second-shadow rounded-[80px] sm:text-[12px] text-[10px]">
            ثبت دیدگاه
          </button>
        </div>
      </div>

      <div className="flex items-center sm:justify-start justify-between">
        <p className="sm:ml-6 text-[#455A64] sm:text-base text-xs dark:text-gray-400">
          آیا از این مقاله راضی بودید ؟
        </p>
        <div className="flex items-center sm:gap-0 gap-2 ">
          <div className="items-center flex sm:w-[83px] w-[53px] h-[48px] bg-[#ECEFF1] sm:ml-4 rounded-[50px] dark:bg-[#37474F] sm:justify-start justify-center">
            <span className="sm:mr-4 sm:w-[24px] w-[16px] sm:h-[24px] h-[16px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.48047 18.35L10.5805 20.75C10.9805 21.15 11.8805 21.35 12.4805 21.35H16.2805C17.4805 21.35 18.7805 20.45 19.0805 19.25L21.4805 11.95C21.9805 10.55 21.0805 9.34997 19.5805 9.34997H15.5805C14.9805 9.34997 14.4805 8.84997 14.5805 8.14997L15.0805 4.94997C15.2805 4.04997 14.6805 3.04997 13.7805 2.74997C12.9805 2.44997 11.9805 2.84997 11.5805 3.44997L7.48047 9.54997"
                  className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                  strokeWidth="1.5"
                  strokeMiterLimit="10"
                />
                <path
                  d="M2.37988 18.3499V8.5499C2.37988 7.1499 2.97988 6.6499 4.37988 6.6499H5.37988C6.77988 6.6499 7.37988 7.1499 7.37988 8.5499V18.3499C7.37988 19.7499 6.77988 20.2499 5.37988 20.2499H4.37988C2.97988 20.2499 2.37988 19.7499 2.37988 18.3499Z"
                  className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="sm:mr-[6px] mr-1 text-[#263238] dark:text-gray-400 sm:text-base text-xs">
              22
            </p>
          </div>

          <div className="items-center flex sm:w-[83px] w-[53px] h-[48px] bg-[#ECEFF1]  rounded-[50px] dark:bg-[#37474F] sm:justify-start justify-center">
            <span className="sm:mr-4 sm:w-6 sm:h-6 w-4 h-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5197 5.6499L13.4197 3.2499C13.0197 2.8499 12.1197 2.6499 11.5197 2.6499H7.71973C6.51973 2.6499 5.21973 3.5499 4.91973 4.7499L2.51973 12.0499C2.01973 13.4499 2.91973 14.6499 4.41973 14.6499H8.41973C9.01973 14.6499 9.51973 15.1499 9.41973 15.8499L8.91973 19.0499C8.71973 19.9499 9.31973 20.9499 10.2197 21.2499C11.0197 21.5499 12.0197 21.1499 12.4197 20.5499L16.5197 14.4499"
                  className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M21.6201 5.65V15.45C21.6201 16.85 21.0201 17.35 19.6201 17.35H18.6201C17.2201 17.35 16.6201 16.85 16.6201 15.45V5.65C16.6201 4.25 17.2201 3.75 18.6201 3.75H19.6201C21.0201 3.75 21.6201 4.25 21.6201 5.65Z"
                  className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="sm:mr-[6px] mr-1  text-[#263238] dark:text-gray-400 sm:text-base text-xs">
              22
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RatingCourses };
