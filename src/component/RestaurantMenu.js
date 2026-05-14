import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const base_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1";
const RestaurantMenu = () => {
  const { resid } = useParams();

  return (
    <div className="menu-item-wrapper">
      <h1>{resid} Restaurant MENU:</h1>
      fetch({base_URL + resid})
    </div>
  );
};

export default RestaurantMenu;
