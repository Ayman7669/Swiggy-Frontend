import React from "react";
import { useState } from "react";
import { useContext } from "react";
import HotelListContext from "../utils/HotelListCotext";

const Button = () => {
  const { hotelList, setHotelList, filteredHotelList, setFilteredHotelList } =
    useContext(HotelListContext);
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => {
          // console.log("Before array sorying", filterArr);
          const filterArr = hotelList.filter((resobj) => {
            return resobj?.info?.avgRating > 4.5;
          });
          // console.log("After array sorying", filterArr);
          setFilteredHotelList(filterArr);
        }}
      >
        Top Rated
      </button>
    </div>
  );
};
export default Button;
