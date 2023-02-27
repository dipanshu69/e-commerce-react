import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";


export const productContext = createContext({
  product: null,
  setProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};
