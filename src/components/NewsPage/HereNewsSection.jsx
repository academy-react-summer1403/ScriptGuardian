import React from "react";

const HereNewsSection = () => {
  return (
    <div className="xl:w-[1323px] xl:h-[485px]  sm:h-[180px] h-[150px]  mb-5  mr-2  mt-[40px] flex xl:mx-auto  ">
    {/* TODO */}
      <div className="container flex  mx-auto xl:gap-x-[130px] relative justify-between items-center">
        <div className="xl:w-[526px] xl:mt-[156px] xl:mr-0 sm:mr-3 z-[1]">
          <h2 className="text-[#263238] dark:text-gray-400 font-[900] xl:text-[40px] text-[26px] mt-[12px] ">
            اخبار و مقالات اسکریپت گاردین
          </h2>
          <p className="mt-[12px] text-[#455A64] dark:text-gray-200 xl:text-[16px] text-[14px] xl:w-auto w-[320px]">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.
          </p>
        </div>
        <div className="xl:w-[584px] block lg:w-[284px]  w-full  h-full   xl:h-[485px] bg-heroNews  bg-no-repeat  bg-contain sm:bg-center  sm:static absolute  top-0 right-0 z-0 sm:opacity-100 sm:dark:opacity-100 opacity-60 dark:opacity-30  md:mr-[130px] lg:mr-0"></div>
      </div>
    </div>
  );
};

export { HereNewsSection };
