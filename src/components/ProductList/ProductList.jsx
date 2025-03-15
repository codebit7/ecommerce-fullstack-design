import React from "react";
import "./ProductList.css";

import { FaRegHeart } from "react-icons/fa";


const ProductList = ({products}) => {
  return (
    <div className="product-list">
      {products.map((product) => (

        <div className="list-product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="list-product-image" />

          <div className="list-product-details">
            <div className="headerbox">
            <h3 className="list-product-title">{product.title}</h3>
            <span className="wishList-icon"><FaRegHeart className="wishlist-icon" /></span>
            </div>
            <div className="list-product-pricing">
              <span className="list-price">{product.price}</span>
              {product.originalPrice && (
                <span className="list-original-price">{product.originalPrice}</span>
              )}
            </div>
            <div className="list-product-rating">
              ⭐⭐⭐⭐⭐ <span className="list-rating-score">{product.rating}</span> • {product.orders} orders{" "}
              {product.freeShipping && <span className="list-free-shipping">• Free Shipping</span>}
            </div>
            <p className="list-product-description">{product.description}</p>
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
