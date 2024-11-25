import React from "react";
import { FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "./Logo";
import { Name } from "./Name";
import { HamburgerMenu } from "./HamburgerMenu";
import { MainMenu } from "./MainMenu";
import { LoginButton } from "./LoginButton";
import { CartButton } from "./CartButton";
import { DarkButton } from "./DarkButton";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <header
      className={` flex w-full h-[50px]  mt-8 items-center justify-between relative  z-[10] object-cover    `}
    >
      {/* Content */}
      <div className="flex items-center justify-center xl:mr-[0px] mr-[10px]  xl:gap-x-[8px]  ">
        <Logo />
        <Name />
        {/* Hamburger Menu */}
        <HamburgerMenu />
      </div>
      <div className="md:flex hidden ">
        {/* Menu */}
        <MainMenu />
      </div>
      <div className="flex items-center xl:gap-[16px] gap-[10px] xl:ml-[0] ml-[10px]">
        <DarkButton />
        {/* CartButton */}

        <CartButton />

        {/*LoginButton */}
        <LoginButton />
      </div>
    </header>
  );
};

export { TopHeader };
