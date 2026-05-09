import React from "react";
import { useState } from "react";
import resArr from "../utils/dummydata.js";

const Button = () => {
  return (
    <div className="btn-container">
      <button
        onClick={() => {
          console.log("Before array sorying", resArr);

          const filterArr = resArr.filter((resobj) => {
            return resobj.avgRating > 4;
          });

          console.log("filter arr is :", filterArr);
          resArr = filterArr;

          console.log("Original array is:", resArr);
        }}
      >
        Top Rated
      </button>
    </div>
  );
};
export default Button;
