import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CardIcon = () => {
  const { cartOpen, setCartOpen } = useContext(CartContext);

  const handleClick = () => {
    console.log("click");
    setCartOpen(!cartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
