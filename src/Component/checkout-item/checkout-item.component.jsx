import React from "react";
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiOutlineClose,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  completeRemoveCheckOutItemFromCart,
  removeCheckOutItemFromCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ CheckOutItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, quantity, price } = CheckOutItem;

  const removeItem = () =>
    dispatch(completeRemoveCheckOutItemFromCart(cartItems, CheckOutItem));

  const showPrice = price * quantity;

  const handleClickToAdd = () => {
    dispatch(addItemToCart(cartItems, CheckOutItem));
  };

  const handleClickToRemove = () => {
    dispatch(removeCheckOutItemFromCart(cartItems, CheckOutItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">
          <AiFillCaretLeft onClick={handleClickToRemove} />
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow">
          <AiFillCaretRight onClick={handleClickToAdd} />
        </div>
      </span>
      <span className="price">{showPrice}</span>
      <AiOutlineClose style={{ cursor: "pointer" }} onClick={removeItem} />
    </div>
  );
};

export default CheckOutItem;
