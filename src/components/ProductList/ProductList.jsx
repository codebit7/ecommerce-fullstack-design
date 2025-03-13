import React from "react";
import "./ProductList.css";

import { FaRegHeart } from "react-icons/fa";


const ProductList = ({products}) => {
  return (
    <div className="product-list">
      {products.map((product) => (

        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />

          <div className="product-details">
            <div className="headerbox">
            <h3 className="product-title">{product.title}</h3>
            <span className="wishList-icon"><FaRegHeart className="wishlist-icon" /></span>
            </div>
            <div className="product-pricing">
              <span className="price">{product.price}</span>
              {product.originalPrice && (
                <span className="original-price">{product.originalPrice}</span>
              )}
            </div>
            <div className="product-rating">
              ⭐⭐⭐⭐⭐ <span className="rating-score">{product.rating}</span> • {product.orders} orders{" "}
              {product.freeShipping && <span className="free-shipping">• Free Shipping</span>}
            </div>
            <p className="product-description">{product.description}</p>
            <a href="#" className="view-details">
              View details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
