import React from "react";
import { Header } from "../../components/Header/Header";
import { OurServices } from "../../components/LandingComponents/OurServices/OurServices";
import { OurCourses } from "../../components/LandingComponents/OurCourses/OurCourses";
import { EducationalPacks } from "../../components/LandingComponents/EducationalPacks/EducationalPacks";
import { TeacherSlider } from "../../components/LandingComponents/TeachersSlider/TeacherSlider";
import { NewsAndArticle } from "../../images/landing/NewsAndArticle/NewsAndArticle";
import { Footer } from "../../components/common/Footer/Footer";

//

const Landing = () => {
  return (
    <div className="relative top-[-80px] w-[1345px] mx-auto">
      {/* Landing Holder */}

      <Header />
      <OurServices />
      <OurCourses />
      <EducationalPacks />
      {/* TODO change bg*/}
      <TeacherSlider />
      <NewsAndArticle />
    </div>
  );
};

export { Landing };
