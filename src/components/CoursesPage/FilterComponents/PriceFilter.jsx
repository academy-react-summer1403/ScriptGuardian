import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
const PriceFilter = ({ setCostDown, setCostUp }) => {
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [value, setValue] = useState([0, 10000000]); // مقادیر پیش‌فرض برای حداقل و حداکثر
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCostDown(newValue[0]); // ارسال پایین‌ترین قیمت به setCostDown
    setCostUp(newValue[1]); // ارسال بالاترین قیمت به setCostUp
  };
  return (
    <div className="w-full min-h-[25px] mt-[20px]  ">
      <div className="border-b pb-2 flex flex-col items-center dark:border-b-gray-950 text-[#263238] dark:text-gray-200">
        <div className="xl:w-[248px] w-10/12 ">
          {" "}
          <button
            onClick={() => setIsOpenSecond(!isOpenSecond)}
            className="flex justify-between items-center w-full text-left focus:outline-none"
          >
            <span className=""> قیمت </span>
            <span className="ease-in-out ">
              {isOpenSecond ? <FaChevronDown /> : <FaChevronUp />}
            </span>
          </button>
        </div>
        {isOpenSecond && (
          <div className="flex flex-col xl:w-[248px] w-10/12">
            <div style={{ width: 300, margin: "auto" }}>
              <Typography gutterBottom>
                محدوده قیمت: {value[1]} - {value[0]}
              </Typography>
              <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto" // برای نمایش مقدار فعلی
                min={0} // حداقل مقدار
                max={10000000} // حداکثر مقدار
                aria-labelledby="range-slider"
                sx={{
                  width: 238, // عرض اسلایدر
                  height: 8, // ارتفاع اسلایدر
                  color: "#60B764", // رنگ اسلایدر
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#60B764", // رنگ دکمه (thumb)
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#60B764", // رنگ نوار پر شده (track)
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#C8E6C9", // رنگ نوار خالی (rail)
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { PriceFilter };
