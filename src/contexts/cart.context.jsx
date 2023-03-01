import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const completeRemoveCheckOutItemFromCart = (productToAdd) => {
    setCartItems(completeRemoveCheckOutItem(cartItems, productToAdd));
  };

  const removeCheckOutItemFromCart = (productToRemove) => {
    setCartItems(removeCheckOutItem(cartItems, productToRemove));
  };

  useEffect(() => {
    const finalTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotal(finalTotal);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + item.quantity, 0);
    setQuantity(total);
  }, [cartItems]);

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
