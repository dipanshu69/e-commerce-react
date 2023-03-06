import React from "react";
import "./cart-icon.styles.scss";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import {selectCartOpen, selectCartCount} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js"
 
const CardIcon = () => {
  
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartOpen);

  const handleClick = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
