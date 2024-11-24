import React from "react";
import Image from "../../../images/NewsAndArticle/photo1.png";
const NewsImg = ({ addUserProfileImage }) => {
  return (
    <div className="xl:w-[224px] lg:w-[330px] sm:w-[224px] w-[90%] h-[161px] ">
      <img
        src={addUserProfileImage}
        alt=""
        className="w-full h-full rounded-2xl"
      />
    </div>
  );
};

export { NewsImg };
