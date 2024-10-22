import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const FilterTopics = () => {
  const [isOpenThird, setIsOpenThird] = useState(false);
  return (
    <div className="w-full min-h-[25px] mt-[20px]  ">
      <div className="border-b pb-2 flex flex-col items-center dark:border-b-gray-950 text-[#263238] dark:text-gray-200">
        <div className="w-[248px] ">
          {" "}
          <button
            onClick={() => setIsOpenThird(!isOpenThird)}
            className="flex justify-between items-center w-full text-left focus:outline-none"
          >
            <span className=""> موضوعات </span>
            <span className="ease-in-out ">
              {isOpenThird ? <FaChevronDown /> : <FaChevronUp />}
            </span>
          </button>
        </div>
        {isOpenThird && (
          <div className="flex flex-col w-[248px]">
            <div>زیر دسته 1-1</div>
            <div>زیر دسته 1-2</div>
            <div>زیر دسته 1-3</div>
          </div>
        )}
      </div>
    </div>
  );
};

export { FilterTopics };
