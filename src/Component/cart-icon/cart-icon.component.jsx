import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";

const CardIcon = () => {
  return (
    <div className="cart-icon-container">
      <CartIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CardIcon;
