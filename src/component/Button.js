import React, { useState, useContext } from "react";
import HotelListContext from "../utils/HotelListContext";

const Button = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const { hotelList, filteredHotelList, setFilteredHotelList } =
    useContext(HotelListContext);

  const handleToggle = () => {
    if (!isFiltered) {
      // Apply filter
      const filterArr = hotelList.filter(
        (resobj) => resobj?.info?.avgRating > 4.5
      );
      setFilteredHotelList(filterArr);
    } else {
      // Reset to full list
      setFilteredHotelList(hotelList);
    }
    setIsFiltered(!isFiltered); 
  };

  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={handleToggle}>
        {isFiltered ? "Show All" : "Top Rated"} 
      </button>
    </div>
  );
};

export default Button;