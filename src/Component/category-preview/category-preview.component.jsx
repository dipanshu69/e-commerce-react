import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ product, title }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
         {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {product
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
