import MenuItem from "./MenuItem";

// const RestaurantCategory = ({ category }) => {
//   const { title, itemCards } = category;

//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{itemCards.length} items</p>

//       {itemCards.map((menuItem) => {
//         return (
//           <MenuItem key={menuItem.card.info.id} data={menuItem.card.info} />
//         );
//       })}
//     </div>
//   );
// };

const RestaurantCategory = ({ category }) => {
  const { title, itemCards } = category;

  return (
    <div className="ategory-containe">
      <div className="category-header">
        <h3>{title}</h3>
        <div className="arrow">
          <p>{itemCards.length} items</p>
          <p>⬇️</p>
        </div>
      </div>

      {itemCards.map((menuItem) => {
        return (
          <MenuItem key={menuItem.card.info.id} data={menuItem.card.info} />
        );
      })}
    </div>
  );
};
export default RestaurantCategory;
