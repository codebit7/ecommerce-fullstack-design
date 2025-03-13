import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="recommend-card">
      <img src={image} alt={title} className="recommend-product-image" />
      <p className="p-price">${price}</p>
      <p className="recommend-product-title">{title}</p>
    </div>
  );
};

export default ProductCard;
