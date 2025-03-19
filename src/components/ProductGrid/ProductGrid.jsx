import React from "react";
import "./productGrid.css";
import { FaRegHeart } from "react-icons/fa";
import placeholderImage  from './../../assets/Form/file/placeholder-image.jpg'
import { useNavigate } from "react-router-dom";
import { route } from "preact-router";

export const calculateReviews = (product) => {
  if (!product || !product.ratings) {
    return 0;
  }
  
  return product.ratings.filter((p) => p.comment && p.comment.trim() !== "").length;
};

const ProductGrid = ({ products }) => {

 
  



  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="p-card" key={product._id} onClick={()=>{
          route(`/product/${product._id}`)
        }}>
          <div className="product-image-container">
            <img 
              src={product.images[0]?.url || placeholderImage} 
              alt={product.name} 
              className="product-image" 
            />
          </div>

          <div className="product-info">
            <div className="price-section">
              <div className="product-pricing">
                <span className="price">
                  ${product.discount > 0 ? (product.price - product.discount).toFixed(2) : product.price.toFixed(2)}
                </span>
                {product.discount > 0 && (
                  <span className="old-price">${product.price.toFixed(2)}</span>
                )}
              </div>
              <span className="wishList-icon">
                <FaRegHeart className="wishlist-icon" />
              </span>
            </div>

            <div className="product-rating">
              ⭐⭐⭐⭐⭐ <span className="rating-value">{product.averageRating.toFixed(1)}</span>
              <span className="reviews">({calculateReviews(product)})</span>
            </div>

            <p className="grid-product-title">{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
