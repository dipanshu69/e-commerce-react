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



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  quantity: 0,
  setQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
      const total = cartItems.reduce((total, item) => total + item.quantity, 0);
      setQuantity(total);
  }, [cartItems]);

  const value = {
    cartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    quantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
