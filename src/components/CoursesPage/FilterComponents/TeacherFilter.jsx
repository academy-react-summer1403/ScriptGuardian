import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { MdCheck } from "react-icons/md";
import { NavLink } from "react-router-dom";
const TeacherFilter = () => {
  const [isOpenFifth, setIsOpenFifth] = useState(false);
  return (
    <div className="w-full min-h-[25px] mt-[20px]  ">
      <div className="border-b pb-2 flex flex-col items-center dark:border-b-gray-950 text-[#263238] dark:text-gray-200">
        <div className="w-[248px] ">
          {" "}
          <button
            onClick={() => setIsOpenFifth(!isOpenFifth)}
            className="flex justify-between items-center w-full text-left focus:outline-none"
          >
            <span className=""> اساتید دوره ها </span>
            <span className="ease-in-out ">
              {isOpenFifth ? <FaChevronDown /> : <FaChevronUp />}
            </span>
          </button>
        </div>
        {isOpenFifth && (
          <div className="flex flex-col w-[248px]">
            <div className="relative w-[248px] h-[46px]  mt-6 ">
              <input
                type="search"
                placeholder="جستجوی استاد"
                className="outline-none  pr-4 placeholder:text-[14px] w-full h-full border-[#ECEFF1] dark:border-gray-950 dark:bg-gray-900 border rounded-xl dark:placeholder:text-white dark:text-white"
              />
              <span className="absolute top-[15px] left-[10px] ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M7.66665 14.0002C11.1644 14.0002 14 11.1646 14 7.66683C14 4.16903 11.1644 1.3335 7.66665 1.3335C4.16884 1.3335 1.33331 4.16903 1.33331 7.66683C1.33331 11.1646 4.16884 14.0002 7.66665 14.0002Z"
                    fill="#2196F3"
                  />
                  <path
                    d="M14.2 14.6669C14.08 14.6669 13.96 14.6202 13.8734 14.5335L12.6334 13.2935C12.4534 13.1135 12.4534 12.8202 12.6334 12.6335C12.8134 12.4535 13.1067 12.4535 13.2934 12.6335L14.5334 13.8735C14.7134 14.0535 14.7134 14.3469 14.5334 14.5335C14.44 14.6202 14.32 14.6669 14.2 14.6669Z"
                    fill="#2196F3"
                  />
                </svg>
              </span>
            </div>

            <div className="mt-3 text-[#455A64] ">
              <div className="flex items-center  gap-[8px] ">
                <input
                  type="checkbox"
                  name="teacher1"
                  className="peer hidden"
                  id="teacher1"
                />
                <label
                  htmlFor="teacher1"
                  className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2]  peer-checked:ease-in-out"
                >
                  <MdCheck className="text-white dark:text-gray-900" />
                </label>

                <p className=" ">دکتر بحر العلوم </p>
              </div>
              <div className="flex items-center  gap-[8px] ">
                <input
                  type="checkbox"
                  name="teacher2"
                  className="peer hidden"
                  id="teacher2"
                />
                <label
                  htmlFor="teacher2"
                  className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2]  peer-checked:ease-in-out"
                >
                  <MdCheck className="text-white dark:text-gray-900" />
                </label>

                <p className=" ">مسعود هشمتی</p>
              </div>
              <div className="flex items-center  gap-[8px] ">
                <input
                  type="checkbox"
                  name="teacher3"
                  className="peer hidden"
                  id="teacher3"
                />
                <label
                  htmlFor="teacher3"
                  className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2]  peer-checked:ease-in-out"
                >
                  <MdCheck className="text-white dark:text-gray-900" />
                </label>

                <p className=" ">بهاره یزدانی </p>
              </div>
              <div className="flex items-center  gap-[8px] ">
                <input
                  type="checkbox"
                  name="teacher4"
                  className="peer hidden"
                  id="teacher4"
                />
                <label
                  htmlFor="teacher4"
                  className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2]  peer-checked:ease-in-out"
                >
                  <MdCheck className="text-white dark:text-gray-900" />
                </label>

                <p className=" ">سالار حیدری</p>
              </div>

              <NavLink className={"text-[14px] text-[#2196F3] dark:text-[#1976D2] underline"}>
                مشاهده بیشتر
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { TeacherFilter };
