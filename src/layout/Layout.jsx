import React from "react";
import { TopHeader } from "../components/common/TopHeader/TopHeader";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/common/Footer/Footer";

const Layout = () => {
 
  return (
    <>
      <div className="container  xl:max-w-[1280px] mx-auto" >
        <TopHeader />
      </div>

      <Outlet />

      <Footer />
    </>
  );
};

export { Layout };
