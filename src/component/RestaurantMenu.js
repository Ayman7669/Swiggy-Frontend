
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import RestaurantMenuInfo from "./RestaurantMenuInfo";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=" +
          resId,
      );
      const json = await response.json();
      setMenu(json.data.cards[2].card.card);
      setMenuItems(
        json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards,
      );
    };
    fetchMenu();
  }, []);

  if (!menu) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Restaurant Menu</h1>

      {/* <RestaurantMenuInfo menuInfo={menu.info} /> */}

      <h2>Menu Items</h2>
      {menuItems.map((item) => (
        <div key={item.card.info.id}>
          <MenuItem {...item.card.info} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
