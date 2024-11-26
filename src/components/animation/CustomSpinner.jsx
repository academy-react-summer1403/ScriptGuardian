import React from "react";
import { ClipLoader } from "react-spinners";

const CustomSpinner = ({ style, color, size }) => {
  const save = "flex justify-center items-center mx-auto";
  return (
    <div className={style}>
      <ClipLoader
        color={`${color ? color : "#2196F3"} `}
        size={size ? size : 50}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export { CustomSpinner };
