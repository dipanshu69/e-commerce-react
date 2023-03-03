import React, { useContext, Fragment } from "react";
import CategoryPreview from "../../Component/category-preview/category-preview.component";
import { productContext } from "../../contexts/product.context";

const CategoriesPreview = () => {
  const { products } = useContext(productContext);

  
  return (
    <Fragment>
      {Object.keys(products).map((key) => {
        const {title, items} = products[key];
        return (
          <CategoryPreview key={title} product={items} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
