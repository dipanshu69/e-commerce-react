import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./category-list.component.scss";

const CategoryList = ({categories}) => {


  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;