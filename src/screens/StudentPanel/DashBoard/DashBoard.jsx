import React, { useEffect, useState } from "react";

import { UserInFormation } from "../../../components/panel/DashBoard/UserInFormation";
import { BottomDashBoard } from "../../../components/panel/DashBoard/BottomDashBoard";
import { CommonStudent } from "../../../components/HamberGerStudentPanel/CommonStudent";
import { StudentHamburger } from "../../../components/HamberGerStudentPanel/Studenthamburger";

const DashBoard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* hamburger */}
      <StudentHamburger
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="flex flex-col items-center ">
        {/* Common */}
        <CommonStudent
          toggleMenu={toggleMenu}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          title={"داشبورد"}
        />

        {/* Unic */}

        {/* UserInform */}
        <UserInFormation />

        {/* UserCourses */}
        <BottomDashBoard />
      </div>
    </>
  );
};

export { DashBoard };
