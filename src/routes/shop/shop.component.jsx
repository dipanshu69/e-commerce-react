import React, {useContext, useState} from "react";
import ProductCard from "../../Component/product-card/product-card.component";
import { productContext } from "../../contexts/product.context";
import "./shop.styles.scss";

const Shop = () => {

    const { products} = useContext(productContext);


  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id}product={product} />
      ))}
    </div>
  );
};

export default Shop;
