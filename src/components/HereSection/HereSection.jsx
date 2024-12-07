import React from "react";
import { TopHeader } from "../common/TopHeader/TopHeader";
import { BottomHeader } from "./HereSection/BottomHeader";

const HereSection = () => {
  return (
    <header
      className={`sm:min-h-[900px]  flex bg-[#FAFBFC] dark:bg-[#2C2F33] text-[#263238] bg-no-repeat bg-cover bg-landing-light-1   dark:bg-headerDark2`}
    >
      <div className="container xl:w-[1280px] mx-auto   ">
        {/* <TopHeader/> */}
        <BottomHeader />
      </div>
    </header>
  );
};
// dark:text-[#ECEFF1]
export { HereSection };
