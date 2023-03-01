import React, { useContext, useEffect } from "react";
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiOutlineClose,
} from "react-icons/ai";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ CheckOutItem }) => {
  const {
    completeRemoveCheckOutItemFromCart,
    removeCheckOutItemFromCart,
    addItemToCart,
  } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = CheckOutItem;

  const removeItem = () => completeRemoveCheckOutItemFromCart(CheckOutItem);

  const showPrice = price * quantity;

  const handleClickToAdd = () => {
    addItemToCart(CheckOutItem);
  };

  const handleClickToRemove = () => {
    removeCheckOutItemFromCart(CheckOutItem);
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
