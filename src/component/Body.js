import React, { useEffect } from "react";
import { useState } from "react";
import resArr from "../utils/dummydata.js";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1",
      );
      const json = await response.json(); 

      setHotelList(
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      if (json.data.cards.length > 12) {
        setHotelList(
          json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      } else {
        setHotelList(
          json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        ); 
      }
    };

    fetchData();
  }, []);

  // console.log("Hotel List:", hotelList);

  if (!hotelList) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-container">
      {hotelList.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant.info} />
        );
      })}
    </div>
  );
};

export default Body;
