import React from "react";

const LeftEducationalPacks = ({one}) => {
  return (
    <div className="flex items-center ">
      <div className="flex flex-col flex-wrap w-[460px] h-[149px]">
        <h2 className="font-[900] text-[40px] text-[#263238] dark:text-gray-200 ">
          دسته بندی دوره ها
        </h2>
        <p className="text-[#455A64] dark:text-gray-400 mt-[12px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>
    </div>
  );
};

export  {LeftEducationalPacks};
