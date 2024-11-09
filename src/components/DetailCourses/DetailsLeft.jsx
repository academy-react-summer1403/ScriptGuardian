import React from "react";
import TeacherImage from "../../images/CoursesDetails/Rectangle 14.png";
import image from "../../images/StudentPanel/NavStudent/images.png";
import { useAddReserveCourse } from "../../core/services/api/DetailCourses/handelReserve";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
const DetailsLeft = ({
  startTime,
  endTime,
  courseStatusName,
  cost,
  currentRegistrants,
  teacherName,
  courseId,
  isCourseReseve,
  isCourseUser,
}) => {
  const queryClient = useQueryClient();

  const { mutate: AddReserve } = useAddReserveCourse();
  const handleAddReserve = () => {
    AddReserve(courseId, {
      onSuccess: (data) => {
        if (data.success == true) {
          toast.success("با موفقیت رزرو شده");
          queryClient.invalidateQueries("CoursesDetail");
        }

        //TODO
      },
    });
  };
  return (
    <div className="flex flex-col xl:w-[405px] lg:w-[305px] w-[95%] lg:mt-0 mt-5 ">
      <div className="w-full items-center flex flex-col h-[501px] shadow-ّFirst-shadow bg-white dark:bg-gray-900 rounded-3xl">
        <h3 className="text-[#263238] dark:text-gray-200 font-[700] text-[24px] mt-8">
          مشخصات دوره
        </h3>
        <div className="border-y-[1px] dark:border-y-gray-950 xl:w-[341px] w-[95%] h-[288px] mt-6 flex flex-col">
          <div className="flex justify-between w-full h-[72px] border-b dark:border-b-gray-950 items-center">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] bg-[#2196F3] dark:bg-[#1E88E5] rounded-full  flex items-center justify-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-[#455A64] dark:text-gray-400 mr-3">
                تعداد دانشجو
              </p>
            </div>
            <p className="text-[#263238]  dark:text-gray-200 font-bold">
              {currentRegistrants}
            </p>
          </div>

          <div className="flex justify-between w-full h-[72px] border-b items-center dark:border-b-gray-950">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] bg-[#2196F3] dark:bg-[#1E88E5] rounded-full  flex items-center justify-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11.89V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2H8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17.2202V22.0002"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 13H22"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 22H16.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.8598 9.36977H13.0998C11.7198 9.36977 11.2598 8.44977 11.2598 7.52977V4.00977C11.2598 2.90977 12.1598 2.00977 13.2598 2.00977H17.8598C18.8798 2.00977 19.6998 2.82977 19.6998 3.84977V7.52977C19.6998 8.54977 18.8798 9.36977 17.8598 9.36977Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.9102 7.91998L19.7002 7.06998V4.30998L20.9102 3.45998C21.5102 3.04998 22.0002 3.29998 22.0002 4.02998V7.35998C22.0002 8.08998 21.5102 8.33998 20.9102 7.91998Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-[#455A64] dark:text-gray-400 mr-3">
                {" "}
                وضعیت دوره
              </p>
            </div>
            <p className="text-[#263238]  dark:text-gray-200 font-bold">
              {courseStatusName}{" "}
            </p>
          </div>

          <div className="flex justify-between w-full h-[72px] border-b items-center dark:border-b-gray-950">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] bg-[#2196F3] dark:bg-[#1E88E5] rounded-full  flex items-center justify-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2V5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 9.08984H20.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13.7002H12.0045"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29431 13.7002H8.30329"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29431 16.7002H8.30329"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-[#455A64] dark:text-gray-400 mr-3">
                {" "}
                تاریخ دوره
              </p>
            </div>
            <p className="text-[#263238]  dark:text-gray-200 font-bold">
              {" "}
              {/* 24 فروردین 1403 */}
              {startTime?.slice(0, 10)}
            </p>
          </div>

          <div className="flex justify-between w-full h-[72px] items-center">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] bg-[#2196F3] dark:bg-[#1E88E5] rounded-full  flex items-center justify-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2V5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 9.08984H20.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.4399 19L17.4299 19.99L19.5599 18.02"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13.7002H12.0045"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29431 13.7002H8.30329"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29431 16.7002H8.30329"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-[#455A64] dark:text-gray-400 mr-3">
                {" "}
                تاریخ پایان
              </p>
            </div>
            <p className="text-[#263238]  dark:text-gray-200 font-bold">
              {" "}
              {endTime?.slice(0, 10)}{" "}
            </p>
          </div>
        </div>
        <div className="xl:w-[341px] w-[95%] h-[56px] mt-8 flex items-center justify-between">
          {isCourseUser != 1 ? (
            <>
              {isCourseReseve != 1 ? (
                <button
                  onClick={handleAddReserve}
                  className="w-[132px] h-full bg-[#2196F3] dark:bg-[#1E88E5] rounded-[80px] shadow-Second-shadow text-white flex items-center justify-center"
                >
                  شرکت در دوره
                </button>
              ) : (
                <button className="w-[132px] h-full bg-[#d5a71a] dark:bg-[#7c641d] rounded-[80px] shadow-Second-shadow text-white flex items-center justify-center">
                  در انتظار تایید{" "}
                </button>
              )}
            </>
          ) : (
            <button className="w-[132px] h-full bg-[#4CAF50] dark:bg-[#388E3C] rounded-[80px] shadow-Second-shadow text-white flex items-center justify-center">
              تایید شده
            </button>
          )}

          <p className="text-[#2196F3] dark:text-[#1E88E5]">
            {" "}
            {cost}
            <span className="text-[#263238] dark:text-gray-200">تومان</span>
          </p>
        </div>
      </div>

      <div className="w-full h-[112px] bg-white dark:bg-gray-900 rounded-3xl mt-8 flex items-center ">
        <div className="flex w-16 h-16 mr-6">
          <img src={image} alt="" className="w-full  h-full rounded-2xl" />
        </div>
        <div className="flex flex-col mr-4">
          <div className="flex items-center ">
            {" "}
            <span>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.81777 2.18669L3.42373 4.80669C2.01501 5.64669 2.01501 7.52669 3.42373 8.36669L7.81777 10.9867C8.60607 11.46 9.90531 11.46 10.6936 10.9867L15.0658 8.36669C16.4672 7.52669 16.4672 5.65336 15.0658 4.81336L10.6936 2.19336C9.90531 1.71336 8.60607 1.71336 7.81777 2.18669Z"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.59177 9.22021L4.58447 12.3469C4.58447 13.1935 5.29978 14.1002 6.17567 14.3669L8.50408 15.0735C8.90553 15.1935 9.56974 15.1935 9.97849 15.0735L12.3069 14.3669C13.1828 14.1002 13.8981 13.1935 13.8981 12.3469V9.25355"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1025 10.5V6.5"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="font-bold text-[#263238] dark:text-gray-200">
              {teacherName}
            </p>
          </div>
          <p className="text-[#455A64] dark:text-gray-400 text-sm">
            برنامه نویسی تحت فرانت و بکند
          </p>
        </div>
      </div>
    </div>
  );
};

export { DetailsLeft };
