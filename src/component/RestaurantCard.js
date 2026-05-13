import React from "react";
import ReactDOM from "react-dom/client";

const base_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ resdata }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
    areaName,
    slaString,
  } = resdata;

  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={base_URL + cloudinaryImageId}
      />
      <div className="card-details">
        <h3 className="res-title">{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>⭐{avgRating}</h4>
        <h4>
          {sla.deliveryTime} mins | {costForTwo}
        </h4>
        <h4>{areaName} | {sla.slaString}</h4>
        
      </div>
    </div>
  );
};

export default RestaurantCard;
