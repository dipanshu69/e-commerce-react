import React, { useContext, Fragment } from "react";
import CategoryPreview from "../../Component/category-preview/category-preview.component";
import { productContext } from "../../contexts/product.context";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(productContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {products[title].map((product) => (
              <CategoryPreview key={product.id} product={product} title={title}/>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
