import React from "react";
import { ClipLoader } from "react-spinners";

const CustomSpinner = ({ style }) => {
  const save = "flex justify-center items-center mx-auto";
  return (
    <div className={style}>
      <ClipLoader color="#2196F3" size={50} speedMultiplier={1.5} />
    </div>
  );
};

export { CustomSpinner };
