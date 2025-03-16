import React from "react";
import "./ProductList.css";

import { FaRegHeart } from "react-icons/fa";


const ProductList = ({products}) => {

  const calculateRating = (index)=>{
    

    let sum = products[index].ratings.reduce((acc,currentStar)=>{
      return acc + currentStar;
      },0);

    let rating = sum/products.length || 1;
    return rating;

  }
  return (
    <div className="product-list">
      {products.map((product, index) => (

        <div className="list-product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="list-product-image" />

          <div className="list-product-details">
            <div className="headerbox">
            <h3 className="list-product-title">{product.name}</h3>
            <span className="wishList-icon"><FaRegHeart className="wishlist-icon" /></span>
            </div>
            <div className="list-product-pricing">
              <span className="list-price">{product.price}</span>
              {product.originalPrice && (
                <span className="list-original-price">{product.originalPrice || product.price-15}</span>
              )}
            </div>
            <div className="list-product-rating">
              ⭐⭐⭐⭐⭐ <span className="list-rating-score">{calculateRating(index)}</span> • 32 orders{" "}
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
