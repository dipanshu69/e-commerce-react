import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data.js";

export const productContext = createContext({
  product: {}
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProducts(categoryMap);
    };
    getCategoriesMap();
  });



  const value = { products };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};
