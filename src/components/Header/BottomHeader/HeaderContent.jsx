import React from "react";

const HeaderContent = () => {
  return (
    <div className="text-[#263238] dark:text-gray-200 flex justify-center items-center  text-center flex-col ">
      <p className="md:font-[500] font-[400] md:text-[24px] text-[20px] ">پلتفرم اموزش طراحی وب</p>
      <h1 className="md:font-[900] sm:font-[600] font-[500] md:text-[80px] sm:text-[60px] text-[40px] mt-[8px]  sm:tracking-[-0.013em] ">
        مرجع اموزش برنامه نویسی
      </h1>
      <p className="md:font-[500] font-[400] md:text-[24px] text-[18px] mt-[8px] tracking-[-0.013em] ">
        مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان
        فارسی .
      </p>
    </div>
  );
};

export { HeaderContent };
