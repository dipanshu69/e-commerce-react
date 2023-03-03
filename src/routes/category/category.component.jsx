import React, { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Component/product-card/product-card.component";
import { productContext } from "../../contexts/product.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(productContext);
  const [itemToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    const result = products.filter(
      (item) => item.title.toLowerCase() === category.toLowerCase()
    );
    setItemsToShow(result[0].items);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {itemToShow &&
          itemToShow.map((item, idx) => (
            <ProductCard key={idx} product={item} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
