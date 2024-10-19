import React from "react";
import { TopHeader } from "../common/TopHeader/TopHeader";
import { BottomHeader } from "./BottomHeader/BottomHeader";

const Header = () => {
  return (
    <header className={`min-h-[900px]  flex bg-[#FAFBFC] dark:bg-[#2C2F33] text-[#263238] bg-no-repeat bg-cover bg-header`}>
      <div className="container xl:w-[1280px] mx-auto  ">
            <TopHeader/>
            <BottomHeader/>
      </div>
      
    </header>
    
  );
};
// dark:text-[#ECEFF1] 
export { Header };
