import React from "react";
import { HereSection } from "../../components/HereSection/HereSection";
import { OurServices } from "../../components/LandingComponents/OurServices/OurServices";
import { OurCourses } from "../../components/LandingComponents/OurCourses/OurCourses";
import { EducationalPacks } from "../../components/LandingComponents/EducationalPacks/EducationalPacks";
import { TeacherSlider } from "../../components/LandingComponents/TeachersSlider/TeacherSlider";
import { NewsAndArticle } from "../../components/LandingComponents/NewsAndArticle/NewsAndArticle.jsx";

const Landing = () => {
  return (
    <div className="relative top-[-81px] xl:max-w-[1343px] mx-auto  overflow-x-hidden">
      {/* Landing Holder */}
      <HereSection />
      <OurServices />
      <OurCourses />
      <EducationalPacks />
      <TeacherSlider />
      <NewsAndArticle />
    </div>
  );
};

export { Landing };
