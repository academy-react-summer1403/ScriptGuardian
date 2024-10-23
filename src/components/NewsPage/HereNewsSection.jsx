import React from "react";

const HereNewsSection = () => {
  return (
    <div className="w-[1323px] h-[485px]  mt-[40px] flex mx-auto">
      <div className="container flex  mx-auto gap-x-[130px] ">
        <div className="w-[526px] mt-[156px]  ">
          <h2 className="text-[#263238] dark:text-gray-400 font-[900] text-[40px] mt-[12px]">
            اخبار و مقالات اسکریپت گاردین
          </h2>
          <p className="mt-[12px] text-[#455A64] dark:text-gray-200">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.
          </p>
        </div>
        <div className="w-[584px]   h-[485px] bg-heroNews object-cover bg-no-repeat  "></div>
      </div>
    </div>
  );
};

export { HereNewsSection };
