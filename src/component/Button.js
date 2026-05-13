import React from "react";
import { useState } from "react";
import resArr from "../utils/dummydata.js";

const Button = () => {
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("Before array sorying", resArr);

          let filterArr = filtered.filter((resobj) => {
            return resobj.info.avgRating > 4;
          });
          setfilter(filterArr);
        }}
      >
        Top Rated
      </button>
    </div>
  );
};
export default Button;
