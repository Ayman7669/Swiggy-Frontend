// import React from "react";

// const MenuItem = (props) => {
//   const { name, price, ratings, description, imageId } = props;
//   return (
//     <div className="menu-card-container">
//       <div className="menu-card-detail">
//         <h2>{name}</h2>
//         <h5>₹{price / 100}</h5>
//         <h5>
//           ⭐{ratings.aggregatedRating.rating} (
//           {ratings.aggregatedRating.ratingCountV2})
//         </h5>
//         <h6>{description}</h6>

//         <img
//           src={
//             "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=" +
//             imageId
//           }
//           alt={name}
//           className="menu-item-image"
//         />
//       </div>
//     </div>
//   );
// };
// export default MenuItem;

import React from "react";

const MenuItem = (props) => {
  const { name, defaultPrice, price, ratings, description, imageId } = props;
  return (
    <div className="menu-item-card">
      <div className="menu-item-info">
        <div className="menu-item-header">
          <h2 className="menu-item-name">{name}</h2>
          <span className="menu-item-price">₹{defaultPrice||price / 100}</span>
        </div>

        <div className="menu-item-rating">
          <span className="rating-star">⭐</span>
          <span className="rating-value">
            {ratings.aggregatedRating.rating}
          </span>
          <span className="rating-count">
            ({ratings.aggregatedRating.ratingCountV2})
          </span>
        </div>

        <p className="menu-item-description">{description}</p>

        <button className="menu-item-add-btn">
          ADD
          <span className="add-btn-plus">+</span>
        </button>
      </div>

      <div className="menu-item-image-wrapper">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt={name}
          className="menu-item-image"
        />
      </div>
    </div>
  );
};

export default MenuItem;
