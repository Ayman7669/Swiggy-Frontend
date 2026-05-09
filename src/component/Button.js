import React from "react";
import { useState } from "react";
// import resArr from "../utils/dummydata.js";

const resArr = [
  {
    id: "118746",
    resName: "McDonald's Gourmet Burger Collection",
    cuisine: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.4,
    delieveryTime: 40,
    costForTwo: "₹600 for two",
    imgId: "br2llzwkfsdl8f0tfuez",
    location: "Abids & Koti",
  },
  {
    id: "650819",
    resName: "Wow! Momo",
    cuisine: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
    avgRating: 4.2,
    delieveryTime: 37,
    costForTwo: "₹500 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/24808535-67a4-4fe3-891a-03a041cf9836_650819.jpg",
    location: "Malakpet",
  },
  {
    id: "650820",
    resName: "Imperial Multicuisine Restaurant",
    cuisine: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 38,
    costForTwo: "₹400 for two",
    imgId: "rqlwvsmzcfxbg9u6ajgm",
    location: "Redhills",
  },
  {
    id: "77905",
    resName: "Santosh Dhaba Exclusive",
    cuisine: ["Biryani", "Chinese", "Italian", "Mexican", "Desserts"],
    avgRating: 4.3,
    delieveryTime: 45,
    costForTwo: "₹300 for two",
    imgId: "jllcesio37olflwnvter",
    location: "ABids",
  },
  {
    id: "289061",
    resName: "Istah - The Mediterranean Way",
    cuisine: [
      "Mediterranean",
      "Snacks",
      "Biryani",
      "Grill",
      "Kebabs",
      "Arabian",
      "Lebanese",
      "Beverages",
      "Desserts",
      "Italian",
    ],
    avgRating: 3.8,
    delieveryTime: 43,
    costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/4f3c4f02-b633-4afd-8ece-3f3a358741bc_289061.jpg",
    location: "Puppalaguda",
  },
  {
    id: "797153",
    resName: "Domino's Pizza",
    cuisine: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.5,
    delieveryTime: 30,
    costForTwo: "₹400 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/c78af160-0e43-47b9-8c48-99818e5e30ac_797153.JPG",
    location: "Charminar",
  },
  {
    id: "341437",
    resName: "Onesta",
    cuisine: ["Italian", "Desserts", "Pizzas", "American", "Snacks"],
    avgRating: 3.6,
    delieveryTime: 49,
    costForTwo: "₹200 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/19/c27d82ae-10e4-42df-8f2b-fa4a78f1b4a0_341437.JPG",
    location: "Banjara Hills",
  },
];
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
