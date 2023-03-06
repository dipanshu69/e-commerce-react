import React from "react";
import Button, {Button_Type_Classes} from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart} from "../../store/cart/cart.action.js";
import { selectCartItems} from "../../store/cart/cart.selector.js"; 
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;
  const cartItems = useSelector(selectCartItems);
 const dispatch = useDispatch();


  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button  buttonType={Button_Type_Classes.inverted}  onClick={addProductToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
