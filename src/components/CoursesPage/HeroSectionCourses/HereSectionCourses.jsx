import React from "react";

const HereSectionCourses = () => {
  return (
    <div className="w-[1323px] h-[485px]  mt-[40px] flex mx-auto">
      <div className="container flex  mx-auto gap-x-[130px] ">
        <div className="w-[526px] mt-[156px]  ">
          <h3 className="text-[#2196F3] dark:text-[#90CAF9] text-[24px] font-[700] ">
            مهمه از کی یاد می گیری!!
          </h3>
          <h2 className="text-[#263238] dark:text-gray-400 font-[900] text-[40px] mt-[12px]">
            اموزش برنامه نویسی با بهترین ها
          </h2>
          <p className="mt-[12px] text-[#455A64] dark:text-gray-200">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.{" "}
          </p>
        </div>
        <div className="w-[584px]   h-[485px] bg-heroCourses object-cover bg-no-repeat  "></div>
      </div>
    </div>
  );
};

export { HereSectionCourses };
