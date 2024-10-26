import React from "react";

const HereNewsSection = () => {
  return (
    <div className="xl:w-[1323px] xl:h-[485px] max-w-max mr-2  mt-[40px] flex xl:mx-auto ">
      <div className="container flex  mx-auto gap-x-[130px] ">
        <div className="xl:w-[526px] xl:mt-[156px] xl:mr-0  mr-">
          <h2 className="text-[#263238] dark:text-gray-400 font-[900] xl:text-[40px] text-[26px] mt-[12px] ">
            اخبار و مقالات اسکریپت گاردین
          </h2>
          <p className="mt-[12px] text-[#455A64] dark:text-gray-200 xl:text-[16px] text-[14px] xl:w-auto w-[320px]">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.
          </p>
        </div>
        <div className="w-[584px] xl:block hidden    h-[485px] bg-heroNews object-cover bg-no-repeat  "></div>
      </div>
    </div>
  );
};

export { HereNewsSection };
