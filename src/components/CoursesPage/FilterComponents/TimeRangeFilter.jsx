import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
const TimeRangeFilter = () => {
  const [isOpenFourth, setIsOpenFourth] = useState(false);
  return (
    <div className="w-full min-h-[25px] mt-[20px]  ">
      <div className="border-b pb-2 flex flex-col items-center dark:border-b-gray-950 text-[#263238] dark:text-gray-200">
        <div className="xl:w-[248px] w-10/12 ">
          {" "}
          <button
            onClick={() => setIsOpenFourth(!isOpenFourth)}
            className="flex justify-between items-center w-full text-left focus:outline-none"
          >
            <span className="">مدت زمان </span>
            <span className="ease-in-out ">
              {isOpenFourth ? <FaChevronDown /> : <FaChevronUp />}
            </span>
          </button>
        </div>
        {isOpenFourth && (
          <div className="flex flex-col xl:w-[248px] w-10/12 text-[#455A64]  dark:text-gray-400">
            {/* Filter1 */}
            <div className="flex items-center  gap-[8px] ">
              <input
                type="checkbox"
                name="15day"
                className="peer hidden"
                id="15day"
              />
              <label
                htmlFor="15day"
                className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2] peer-checked:ease-in-out"
              >
                <MdCheck className="text-white dark:text-gray-900" />
              </label>

              <p className=" ">15 روزه</p>
            </div>
            {/* Filter2 */}
            <div className="flex items-center  gap-[8px] ">
              <input
                type="checkbox"
                name="30day"
                className="peer hidden"
                id="30day"
              />
              <label
                htmlFor="30day"
                className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2]  peer-checked:ease-in-out"
              >
                <MdCheck className="text-white dark:text-gray-900" />
              </label>

              <p className=" ">30 روزه</p>
            </div>

            {/* Filter3 */}
            <div className="flex items-center  gap-[8px] ">
              <input
                type="checkbox"
                name="45day"
                className="peer hidden"
                id="45day"
              />
              <label
                htmlFor="45day"
                className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2]  peer-checked:ease-in-out"
              >
                <MdCheck className="text-white dark:text-gray-900" />
              </label>

              <p className=" ">45 روزه</p>
            </div>

            {/* Filter4 */}
            <div className="flex items-center  gap-[8px] ">
              <input
                type="checkbox"
                name="60day"
                className="peer hidden"
                id="60day"
              />
              <label
                htmlFor="60day"
                className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2]  peer-checked:ease-in-out"
              >
                <MdCheck className="text-white dark:text-gray-900" />
              </label>

              <p className=" ">60 روزه</p>
            </div>

            {/* Filter5 */}
            <div className="flex items-center  gap-[8px] ">
              <input
                type="checkbox"
                name="90day"
                className="peer hidden"
                id="90day"
              />
              <label
                htmlFor="90day"
                className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1976D2] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1976D2]  peer-checked:ease-in-out"
              >
                <MdCheck className="text-white dark:text-gray-900" />
              </label>

              <p className=" ">90 روزه</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { TimeRangeFilter };
