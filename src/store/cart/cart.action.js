import { createActions } from "../../utils/reducers/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types";


const addCartItem = (cartItem, productToAdd) => {
    const existingCart = cartItem.find((item) => item.id === productToAdd.id);
  
    if (existingCart) {
      return cartItem.map((item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
  
    return [...cartItem, { ...productToAdd, quantity: 1 }];
  };
  
  const completeRemoveCheckOutItem = (cartItem, productToRemove) => {
    const result = [...cartItem];
    result.map((item, idx) => {
      if (item.id === productToRemove.id) {
        result.splice(idx, 1);
      }
    });
    return result;
  };
  
  const removeCheckOutItem = (cartItem, productToRemove) => {
    const existingCart = cartItem.find((item) => item.id === productToRemove.id);
  
    if (existingCart.quantity === 1) {
      return completeRemoveCheckOutItem(cartItem, productToRemove);
    }
  
    return cartItem.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  };

export const setIsCartOpen = (boolen) => 
createActions(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolen);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd);
    return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
  };

export  const completeRemoveCheckOutItemFromCart = (cartItems, productToAdd) => {
    const newCartItem = completeRemoveCheckOutItem(cartItems, productToAdd);
    return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
  };

export  const removeCheckOutItemFromCart = (cartItems, productToRemove) => {
    const newCartItem = removeCheckOutItem(cartItems, productToRemove);
    return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
  };

