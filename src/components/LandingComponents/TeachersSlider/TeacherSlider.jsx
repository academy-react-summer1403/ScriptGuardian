import React, { useState } from "react";
import ImageSLider from "../../../images/landing/TeachersSlider/BGIMAGE.jfif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLandingTeachers } from "../../../core/services/api/Landing/LandingTeachers";
const TeacherSlider = () => {
  //API
  const { data, isPending } = useLandingTeachers();

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  console.log(data, "this data Landing Teachers in TeacherSlider Comp");

  //
  // const [slides, setSlides] = useState([
  //   { id: 1, name: " سالار حیدری ", image: ImageSLider },
  //   { id: 2, name: "حیدر سالاری", image: ImageSLider },
  //   { id: 4, name: "تصویر 4", image: ImageSLider },
  //   { id: 5, name: "تصویر 5", image: ImageSLider },
  //   { id: 6, name: "تصویر 6", image: ImageSLider },
  //   { id: 7, name: "تصویر 6", image: ImageSLider },
  //   { id: 8, name: "تصویر 6", image: ImageSLider },
  //   { id: 9, name: "تصویر 6", image: ImageSLider },
  //   { id: 10, name: "تصویر 6", image: ImageSLider },
  // ]);

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div onClick={onClick} className="absolute top-[210px] left-0 z-[100]">
        <FaArrowLeft className="text-white " />
      </div>
    );
  };

  // دکمه سفارشی برای پیمایش به جلو
  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div onClick={onClick} className="absolute top-[210px] right-0">
        <FaArrowRight className="text-white" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // استفاده از دکمه‌های سفارشی
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-center z-[10] lg">
        <div className=" mt-[64px] flex justify-center">
          <h2 className="font-[900] text-[40px] text-[#263238] dark:text-gray-400 ">
            اساتید برتر
          </h2>
        </div>

        <Slider {...settings} className="xl:w-[1280px] w-[90%]    ">
          {data?.map((item, index) => {
            return (
              <div
                className={`xl:w-[296px] h-[382px] flex flex-col ${
                  index % 2 !== 0 ? "xl:mt-[64px]" : ""
                }`}
                key={item.index}
              >
                <div className="xl:w-[296px] h-[300px]  flex">
                  <img
                    src={item.pictureAddress}
                    className="w-full h-full rounded-[24px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-[#263238] dark:text-gray-400 mt-[16px] font-[700] xl:text-[24px] text-[20px]">
                    {item.fullName}
                  </h3>
                  <p className="text-[#455A64] dark:text-gray-200 mt-[4px] xl:text-[16px] text-[14px]">
                    بکند, node js, .netcore, database
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export { TeacherSlider };

// import React, { useState } from "react";
// import ImageSLider from "../../../images/landing/TeachersSlider/BGIMAGE.jfif";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// const TeacherSlider = () => {
//   const [slides, setSlides] = useState([
//     { id: 1, name: " سالار حیدری ", image: ImageSLider },
//     { id: 2, name: "حیدر سالاری", image: ImageSLider },
//     { id: 4, name: "تصویر 4", image: ImageSLider },
//     { id: 5, name: "تصویر 5", image: ImageSLider },
//     { id: 6, name: "تصویر 6", image: ImageSLider },
//     { id: 7, name: "تصویر 6", image: ImageSLider },
//     { id: 8, name: "تصویر 6", image: ImageSLider },
//     { id: 9, name: "تصویر 6", image: ImageSLider },
//     { id: 10, name: "تصویر 6", image: ImageSLider },
//   ]);

//   const PrevArrow = ({ className, style, onClick }) => {
//     return (
//       <div onClick={onClick} className="absolute top-[210px] left-0 z-[100]">
//         <FaArrowLeft className="text-white " />
//       </div>
//     );
//   };

//   // دکمه سفارشی برای پیمایش به جلو
//   const NextArrow = ({ className, style, onClick }) => {
//     return (
//       <div onClick={onClick} className="absolute top-[210px] right-0">
//         <FaArrowRight className="text-white" />
//       </div>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />, // استفاده از دکمه‌های سفارشی
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center z-[10]">
//         <div className=" mt-[64px] flex justify-center">
//           <h2 className="font-[900] text-[40px] text-[#263238] dark:text-gray-400 ">
//             اساتید برتر
//           </h2>
//         </div>

//         <Slider {...settings} className="xl:w-[1280px] w-[90%] bg-black ">
//           {slides.map((item, index) => {
//             return (
//               <div
//                 className="xl:w-[296px] h-[382px]  flex flex-col  odd:mt-[64px]"
//                 key={item.id}
//               >
//                 <div className="xl:w-[296px] h-[300px]  flex">
//                   <img
//                     src={ImageSLider}
//                     className="w-full h-full rounded-[24px]"
//                   />
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <h3 className="text-[#263238] dark:text-gray-400 mt-[16px] font-[700] text-[24px]">
//                     ss
//                   </h3>
//                   <p className="text-[#455A64] dark:text-gray-200 mt-[4px]">
//                     بکند, node js, .netcore, database
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </>
//   );
// };

// export { TeacherSlider };
