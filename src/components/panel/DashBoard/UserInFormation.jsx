import React from "react";
import { Link } from "react-router-dom";
import { useGetStudentProfile } from "../../../core/services/api/Panel/GetProfile";

const UserInFormation = () => {
  const { data, isPending } = useGetStudentProfile();
  return (
    <div className="flex border-purple-800 dark:border-purple-600 py-3 rounded-xl mt-5 w-[95%]  border flex-col relative  ">
      <div className="flex lg:mr-[5%]  mt-3 md:flex-nowrap flex-wrap md:flex-row flex-col md:flex-start items-center lg:gap-x-0 md:gap-x-[10%] md:gap-y-0 gap-y-3 ">
        <div className="flex items-center md:w-[200px] xl:w-[250px]  lg:mr-0 md:mr-3 ">
          <p className="text-[#455A64] dark:text-gray-400">
            نام و نام خانوادگی:
          </p>
          <p className="text-purple-900 dark:text-purple-700">
            {" "}
            {data?.fName} {data?.lName}
          </p>
        </div>

        <div className="flex items-center w-auto lg:mr-[5.5%]">
          <p className="text-[#455A64] dark:text-gray-400">تاریخ تولد:</p>
          <p className="text-purple-900 dark:text-purple-700">
            {" "}
            {data?.birthDay.slice(0, 10)}
          </p>
        </div>

        <div className="flex items-center w-auto lg:mr-[28%]">
          <p className="text-[#455A64] dark:text-gray-400">شماره همراه:</p>
          <p className="text-purple-900 dark:text-purple-700">
            {" "}
            {data?.phoneNumber}
          </p>
        </div>
      </div>

      <div className="flex mt-3 lg:mr-[5%] md:mb-5 mb-12 md:flex-nowrap flex-wrap md:flex-row flex-col md:items-start items-center md:gap-y-0 gap-y-3  ">
        <div className="flex items-center w-auto justify-center lg:mr-0 md:mr-3">
          <p className="text-[#455A64] dark:text-gray-400">شماره ملی:</p>
          <p className="text-purple-900 dark:text-purple-700">
            {" "}
            {data?.nationalCode}
          </p>
        </div>

        <div className="flex items-center lg:mr-[15.5%] md:mr-[17%]">
          <p className="text-[#455A64] dark:text-gray-400"> ایمیل:</p>
          <p className="text-purple-900 dark:text-purple-700"> {data?.email}</p>
        </div>
      </div>

      <Link
        to={"/panel/MyProfile"}
        className="absolute bottom-0 left-0 w-[100px] flex items-center justify-center h-[44px] rounded-t-xl border-t border-r  border-black dark:border-white dark:text-white text-[#455A64]  text-sm"
      >
        ویرایش
      </Link>
    </div>
  );
};

export { UserInFormation };
