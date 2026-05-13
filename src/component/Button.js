import React from "react";
import { useState } from "react";


const Button = () => {
  const [filter, setfilter] = useState([]);
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("Before array sorying", filter);
          let filterArr = filter.filter((resobj) => {
            return resobj?.info?.avgRating > 4;
          });
          console.log("After array sorying", filterArr);
          setfilter(filterArr);
        }}
      >
        Top Rated
      </button>
    </div>
  );
};
export default Button;
