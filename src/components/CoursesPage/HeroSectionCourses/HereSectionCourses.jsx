import React from "react";

const HereSectionCourses = () => {
  return (
    <div className="  md:h-[485px] sm:h-[245px]  xl:mt-[40px] flex mx-auto justify-center  ">
      <div className="container flex  mx-auto xl:gap-x-[130px] sm:gap-x-4 justify-center bg- relative">
        <div className="sm:w-[526px]   md:mt-[156px] sm:mt-[50px] mt-[30px] w-full  xl:mr-0 mr-4  z-[1]">
          <h3 className="text-[#2196F3] dark:text-[#90CAF9] md:text-[24px]   text-[20px]  font-[700] ">
            مهمه از کی یاد می گیری!!
          </h3>
          <h2 className="text-[#263238] dark:text-gray-400 font-[900] xl:text-[40px] mt-[12px] lg:text-[32px] md:text-[24px] text-[20px] ">
            اموزش برنامه نویسی با بهترین ها
          </h2>
          <p className="mt-[12px] text-[#455A64] dark:text-gray-200 md:text-base text-xs sm:w-auto w-[260px] ">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.{" "}
          </p>
        </div>
        <div className="xl:w-[584px] sm:block sm:static absolute   xl:h-[485px] bg-heroCourses  bg-no-repeat  bg-contain sm:bg-center lg:bg-left w-full h-full left- top-0  z-0 sm:opacity-100 dark:sm:opacity-100 opacity-40 dark:opacity-30"></div>
      </div>
    </div>
  );
};

export { HereSectionCourses };
