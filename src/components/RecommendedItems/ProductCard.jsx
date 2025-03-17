import React from "react";

const ProductCard = ({ images, name, price }) => {
  return (
    <div className="recommend-card">
      <img src={images[0].url} alt={name} className="recommend-product-image" />
      <p className="p-price">${price}</p>
      <p className="recommend-product-title">{name}</p>
    </div>
  );
};

export default ProductCard;
