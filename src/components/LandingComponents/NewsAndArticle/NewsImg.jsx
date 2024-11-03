import React from "react";
import Image from "../../../images/NewsAndArticle/photo1.png";
const NewsImg = ({ addUserProfileImage }) => {
  return (
    <div className="w-[224px] h-[161px]">
      <img src={addUserProfileImage} alt="" className="w-full h-full" />
    </div>
  );
};

export { NewsImg };
