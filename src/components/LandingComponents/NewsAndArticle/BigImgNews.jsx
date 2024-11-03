import React from "react";
import BigImage from "../../../images/NewsAndArticle/Rectangle32.png";
const BigImgNews = ({ addUserProfileImage }) => {
  return (
    <div className="md:w-[616px]  md:h-[340px] w-[90%] h-auto">
      <img src={addUserProfileImage} alt="" className="w-full h-full" />
    </div>
  );
};

export { BigImgNews };
