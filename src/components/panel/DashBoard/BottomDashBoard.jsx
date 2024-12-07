import React from "react";
import { FaMinus } from "react-icons/fa";
import CourseImg from "../../../images/StudentPanel/DashBoard/Untitled.jpg";
import { useCourses } from "../../../core/services/api/CoursesPage/GetAllCourses";
import { useLandingNews } from "../../../core/services/api/Landing/LandingNews";
import Image from "../../../images/NewsDetails/default_image.png";
import { useNavigate } from "react-router-dom";
import { convertEnToPe } from "persian-number";

const BottomDashBoard = () => {
  const navigate = useNavigate();
  //API COURSES

  const { data } = useCourses({ SearchQuery: undefined });
  const lastTwoItems = data?.courseFilterDtos?.slice(-2);
  console.log(lastTwoItems, "lastTwoItems");

  //API NEWS
  const { data: News, isPending } = useLandingNews();
  const lastNews = News && News?.slice(-2);

  return (
    <div className="flex sm:flex-row flex-col w-[95%] mt-10 gap-x-10 ">
      {/* Courses */}

      <div className="flex flex-col sm:w-[47.5%] ">
        <div className="flex items-center text-xl gap-x-1 ">
          {" "}
          <FaMinus className="text-xl text-[#8cc9fa] dark:text-[#1e3e57]" />
          <h3 className="text-[#263238] dark:text-gray-200 font-bold">
            {" "}
            اخرین دوره ثبت شده
          </h3>
        </div>

        <div className="flex flex-col w-full mt-5 gap-y-5 ">
          {/* Items */}
          {lastTwoItems &&
            lastTwoItems?.map((item, index) => {
              return (
                <>
                  <div
                    className="flex w-full bg-white dark:bg-gray-950 rounded-md h-[75px] shadow-ّFirst-shadow  items-center border-gray-200 dark:border-gray-950 cursor-pointer"
                    key={index}
                    onClick={() => {
                      navigate(
                        `/courses/${item?.courseId ? item?.courseId : "no ID"}`
                      );
                    }}
                  >
                    <div className="h-[85%] w-[25%] mr-[3%] ">
                      <img
                        src={
                          item?.tumbImageAddress
                            ? item?.tumbImageAddress
                            : Image
                        }
                        alt=""
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex w-[100%] h-[85%] flex-col justify-between ">
                      <h3 className="mr-3 text-[#263238] dark:text-gray-200">
                        {item?.title?.length > 25
                          ? item?.title?.slice(0, 25) + "..."
                          : item?.title}
                      </h3>
                      <div className="flex justify-between text-[#455A64] dark:text-gray-400 items-center mr-3">
                        <p className="text-sm">
                          {" "}
                          {item?.teacherName ? item?.teacherName : ""}
                        </p>

                        <p className="text-sm ml-3">
                          <span className="text-[#1e3e57] dark:text-[#8cc9fa]">
                            {item?.cost ? convertEnToPe(item?.cost) : ""}
                          </span>{" "}
                          تومان
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>

      {/* News */}

      <div className="flex flex-col sm:w-[47.5%] sm:mt-0 mt-5 mb-5">
        <div className="flex items-center text-xl gap-x-1 ">
          {" "}
          <FaMinus className="text-xl text-[#8cc9fa] dark:text-[#1e3e57]" />
          <h3 className="text-[#263238] dark:text-gray-200 font-bold">
            {" "}
            آخرین اخبار ثبت شده{" "}
          </h3>
        </div>

        <div className="flex flex-col w-full mt-5 gap-y-5 ">
          {lastNews &&
            lastNews?.map((item, index) => {
              return (
                <>
                  <div
                    className="flex w-full bg-white dark:bg-gray-950 rounded-md h-[75px] shadow-ّFirst-shadow  items-center border-gray-200 dark:border-gray-950 cursor-pointer"
                    key={index}
                    onClick={() => {
                      navigate(`/News/${item?.id ? item?.id : "no ID"}`);
                    }}
                  >
                    <div className="h-[85%] w-[25%] mr-[3%] ">
                      <img
                        src={
                          item?.currentImageAddressTumb
                            ? item?.currentImageAddressTumb
                            : Image
                        }
                        alt=""
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex w-[100%] h-[85%] flex-col justify-between ">
                      <h3 className="mr-3 text-[#263238] dark:text-gray-200">
                        {item?.title?.length > 25
                          ? item?.title?.slice(0, 25) + "..."
                          : item?.title}
                      </h3>
                      <div className="flex justify-between text-[#455A64] dark:text-gray-400 items-center mr-3">
                        <p className="text-sm">
                          {" "}
                          {item?.addUserFullName ? item?.addUserFullName : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { BottomDashBoard };
