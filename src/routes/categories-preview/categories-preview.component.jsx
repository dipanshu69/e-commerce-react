import React, { useContext, Fragment } from "react";
import CategoryPreview from "../../Component/category-preview/category-preview.component";
import { selectProduct } from "../../store/products/products.selector.js";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const products = useSelector(selectProduct);

  return (
    <Fragment>
      {Object.keys(products).map((key) => {
        const { title, items } = products[key];
        return <CategoryPreview key={title} product={items} title={title} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
