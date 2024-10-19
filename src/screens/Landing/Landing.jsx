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
    <>
      {/* Landing Holder */}

      <Header />
      <OurServices/>
      <OurCourses/>
      <EducationalPacks/>
      {/* TODO change bg*/}
      <TeacherSlider/>
      <NewsAndArticle/>
      {/* <Footer/> */}
    </>
  );
};

export { Landing };
