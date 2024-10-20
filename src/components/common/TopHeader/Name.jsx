import React from "react";
import { Link } from "react-router-dom";

const Name = () => {
  return (
    <Link to={"/"} className="md:block hidden xl:mr-[0] md:mr-[5px] xl:font-[700] lg:font-[600] md:font-[500] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[#263238] dark:text-white">
      اسکریپت گاردین
    </Link>
  );
};

export { Name };
