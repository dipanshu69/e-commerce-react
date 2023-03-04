import { createContext, useReducer } from "react";
import { createActions } from "../utils/reducers/reducer.utils.js";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCheckOutItem: () => {},
  completeRemoveCheckOutItem: () => {},
  quantity: 0,
  total: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};
const INITIAL_STATE = {
  cartOpen: false,
  cartItems: [],
  quantity: 0,
  total: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        cartOpen: payload,
      };
    default: {
      throw new Error(`Unhandled type ${type} in cartReducer`);
    }
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartOpen, cartItems, quantity, total }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemReducer = (newCartItem) => {
    const newTotal = newCartItem.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    const newQuantity = newCartItem.reduce(
      (total, item) => total + item.quantity,
      0
    );

    dispatch(
      createActions(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItem,
        quantity: newQuantity,
        total: newTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItem);
  };

  const completeRemoveCheckOutItemFromCart = (productToAdd) => {
    const newCartItem = completeRemoveCheckOutItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItem);
  };

  const removeCheckOutItemFromCart = (productToRemove) => {
    const newCartItem = removeCheckOutItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItem);
  };

  const setCartOpen = (bol) => {
    dispatch(createActions(CART_ACTION_TYPES.SET_IS_CART_OPEN, bol));
  };

  const value = {
    cartOpen,
    setCartOpen,
    addItemToCart,
    completeRemoveCheckOutItemFromCart,
    removeCheckOutItemFromCart,
    cartItems,
    quantity,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
