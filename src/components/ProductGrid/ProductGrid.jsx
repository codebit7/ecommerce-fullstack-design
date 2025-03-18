import React from "react";
import "./productGrid.css";
import { FaRegHeart } from "react-icons/fa";



const ProductGrid = ({products}) => {
  return (
    <div className="product-grid">
    {products.map((product) => (
      <div className="p-card">
      <div className="product-image-container">
        <img src={product.images[0].url} alt={product.title} className="product-image" />
      </div>

      <div className="product-info">
        <div className="price-section">
        <div className="product-pricing">

          <span className="price">${product.price.toFixed(2)}</span>
          
          <span className="old-price">${product.oldPrice.toFixed(2)}</span>
        </div>
        <span className="wishList-icon"><FaRegHeart className="wishlist-icon" /></span>
        </div>

        <div className="product-rating">
        ⭐⭐⭐⭐⭐ <span className="rating-value">{product.rating}</span>
          <span className="reviews">({product.reviews})</span>
        </div>

        <p className="grid-product-title">{product.title}</p>
      </div>
      
    </div>
    ))}
  </div>
  );
};

export default ProductGrid;
