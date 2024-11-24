import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLandingTeachers } from "../../../core/services/api/Landing/LandingTeachers";
import { MdCheck } from "react-icons/md";
import { NavLink } from "react-router-dom";
const TeacherFilter = ({ setCurrentTeacher }) => {
  const [isOpenFifth, setIsOpenFifth] = useState(false);
  const { data: Technologies } = useLandingTeachers();

  const handleCheckboxChange = (id) => {
    setCurrentTeacher(id);
  };
  return (
    <div className="w-full min-h-[25px] mt-[20px]  ">
      <div className="pb-2 flex flex-col items-center  text-[#263238] dark:text-gray-200">
        <div className="xl:w-[248px] w-10/12 ">
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
          <div className="flex flex-col xl:w-[248px] w-10/12">
            <div className="flex items-center mb-4  flex-wrap gap-x-2 gap-y-3 mt-5">
              {Technologies &&
                Technologies.map((item, index) => {
                  return (
                    <>
                      {item?.fullName !== null ? (
                        <div className="gap-x-2 flex">
                          <label
                            for={`default-checkbox-${item?.teacherId}`}
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {item.fullName.length > 30
                              ? `${item.fullName.slice(0, 30)}...`
                              : item.fullName}{" "}
                          </label>
                          <input
                            id={`default-checkbox-${item?.teacherId}`}
                            type="radio"
                            name="same"
                            value={item?.teacherId}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            key={index}
                            onChange={() =>
                              handleCheckboxChange(item.teacherId)
                            }
                          />
                        </div>
                      ) : null}
                    </>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { TeacherFilter };
