import React from "react";
import { useNavigate } from "react-router-dom";
import { ALLOWED_CATEGORIES } from "../utils";

const CategoryCard = ({ imgSrc, title }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const category = title === "Women's" ? ALLOWED_CATEGORIES.WOMENS : ALLOWED_CATEGORIES.MENS;
    navigate(`/products/${category}`);
  };

  return (
    <div className="category-card">
      <div className="cat-card-img-cont">
        <img src={imgSrc} alt="category-img" style={{ width: "100%" }} />
      </div>
      <button className="bigText" onClick={handleNavigation}>
        {title}
      </button>
    </div>
  );
};

export default CategoryCard;
