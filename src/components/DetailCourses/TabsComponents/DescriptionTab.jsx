import React from "react";

const DescriptionTab = ({activeTab}) => {
  return (
    <>
      {activeTab === "description" && (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className="text-[20px] font-bold text-[#263238] dark:text-gray-200">
              اموزش رایگان html{" "}
            </h2>
            <p className="mt-3 text-[#455A64] dark:text-gray-400">
              محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته
              و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
              جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
              کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله
              به روش کدنویسی پیشرفته و تمیز.
            </p>
          </div>
          <div className="flex flex-col mt-6">
            <h2 className="text-[20px] font-bold text-[#263238] dark:text-gray-200">
              اموزش رایگان html برای چه کسانی مناسب است ؟
            </h2>
            <p className="mt-3 text-[#455A64] dark:text-gray-400 mb-10">
              محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته
              و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
              جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
              کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله
              به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت
              حل مساله به روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم
              افزار محبوب ترین کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی
              جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین
              کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export { DescriptionTab };
