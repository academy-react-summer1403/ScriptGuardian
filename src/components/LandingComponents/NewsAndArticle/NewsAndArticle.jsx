import React from "react";

import { BigNews } from "./BigNews";
import { News } from "./News";
import { useNavigate } from "react-router-dom";
import { useLandingNews } from "../../../core/services/api/Landing/LandingNews";

const NewsAndArticle = () => {
  const navigate = useNavigate();

  const goTOCoursesPage = () => {
    navigate("/News");
    window.scrollTo(0, 0); 
  };

  const { data, isPending } = useLandingNews();
  // console.log(data, "data News Landing");

  // console.log(data, "this data Landing Courses in OurCourses Comp");
  return (
    <>
      <div className="mt-[100px] container mx-auto xl:w-[1280px] w-full bg- flex flex-col ">
        <div className="flex justify-center ">
          <h2 className="font-[900] text-[40px] text-[#263238] dark:text-gray-400">
            اخبار و مقالات
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col sm:mt-[40px] xl:mt-0 mt-5 items-center justify-center    ">
          {data && data[0] && (
            <BigNews
              title={data[0]?.title}
              addUserProfileImage={data[0]?.addUserProfileImage}
              miniDescribe={data[0]?.miniDescribe}
              currentView={data[0]?.currentView}
              id={data[0]?.id}
              currentRate={data[0]?.currentRate}
              updateDate={data[0]?.updateDate}
            />
          )}
          <div className="flex flex-col lg:mr-[40px] gap-y-[40px] xl:items-start items-center  mt-10   w-full">
            {data &&
              data?.slice(1, 4).map((item, index) => {
                return (
                  <News
                    key={index}
                    title={item?.title}
                    addUserProfileImage={item?.addUserProfileImage}
                    miniDescribe={item?.miniDescribe}
                    currentView={item?.currentView}
                    id={item?.id}
                    currentRate={item?.currentRate}
                    updateDate={item?.updateDate}
                  />
                );
              })}
          </div>
        </div>
        <div className="flex  justify-center mt-[80px] ">
          {" "}
          <button
            className="w-[131px] h-[48px]  text-white bg-[#2196F3]  rounded-[80px] shadow-Second-shadow  hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] dark:bg-[#1565C0]  ease-in-out duration-300 xl:mt-0  mt-10"
            onClick={goTOCoursesPage}
          >
            مشاهده همه{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export { NewsAndArticle };
