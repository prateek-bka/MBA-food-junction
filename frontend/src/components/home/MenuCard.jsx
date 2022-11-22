import React from "react";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler }) => {
  return (
    <div className="menuCard">
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>₹ {price}</h5>

        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </div>
  );
};

export default MenuCard;
