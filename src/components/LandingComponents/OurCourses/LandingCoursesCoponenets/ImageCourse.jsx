import React from "react";
import ReactIcon from "../../../../images/landing/OurCourses/Rectangle 124.png";
import image from "../../../../images/NewsDetails/default_image.png";

const ImageCourse = ({ tumbImageAddress }) => {
  return (
    <div className="flex justify-center  h-[200px] items-center ">
      <img
        src={
          tumbImageAddress &&
          tumbImageAddress !== "null" &&
          tumbImageAddress.startsWith("https")
            ? tumbImageAddress
            : image
        }
        alt=""
        className="block   xl:w-[264px] w-[90%] h-[180px] rounded-2xl "
      />
    </div>
  );
};

export { ImageCourse };
