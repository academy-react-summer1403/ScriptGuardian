import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { convertEnToPe } from "persian-number";
const PriceFilter = ({ setCostDown, setCostUp, setPrice, price }) => {
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  // const [price, setPrice] = useState([1000, 10000000]);
  const handleChange = (event, newValue) => {
    setPrice(newValue);
    setCostDown(newValue[0]);
    setCostUp(newValue[1]);
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
                محدوده قیمت: {convertEnToPe(price[1])} -{" "}
                {convertEnToPe(price[0])}
              </Typography>
              <Slider
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={1000}
                max={10000000}
                aria-labelledby="range-slider"
                sx={{
                  width: 238,
                  height: 8,
                  color: "#60B764",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#60B764",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#60B764",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#C8E6C9",
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
