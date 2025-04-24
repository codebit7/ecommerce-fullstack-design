import React, { useState } from "react";
import "./ProductList.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import placeHolderImage from './../../assets/Form/file/placeholder-image.jpg';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist, removeToWishlist } from "../../Store/slices/wishList";

export const calculateRating = (product) => {
  if (!product || !product.ratings || product.ratings.length === 0) {
    return 0;
  }

  const sum = product.ratings.reduce((acc, ratingObj) => acc + ratingObj.rating, 0);
  return (sum / product.ratings.length).toFixed(1);
};

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [wishlistState, setWishlistState] = useState({});

  const handleWishlistClick = (e, productId) => {
    e.stopPropagation(); // Prevent card click
    const isWishlisted = wishlistState[productId] ?? false;

    if (isWishlisted) {
      dispatch(removeToWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }

    setWishlistState((prev) => ({
      ...prev,
      [productId]: !isWishlisted,
    }));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          className="list-product-card"
          key={product._id}
          onClick={() => navigate(`/product/${product._id}`)}
        >
          <img
            src={product.images[0]?.url || placeHolderImage}
            alt={product.name}
            className="list-product-image"
          />

          <div className="list-product-details">
            <div className="headerbox">
              <h3 className="list-product-title">{product.name}</h3>
              <span className="wishList-icon">
                {wishlistState[product._id] ? (
                  <FaHeart
                    className="wishlist-icon filled"
                    onClick={(e) => handleWishlistClick(e, product._id)}
                  />
                ) : (
                  <FaRegHeart
                    className="wishlist-icon"
                    onClick={(e) => handleWishlistClick(e, product._id)}
                  />
                )}
              </span>
            </div>

            <div className="list-product-pricing">
              <span className="list-price">
                $
                {product.discount > 0
                  ? (product.price - product.discount).toFixed(2)
                  : product.price.toFixed(2)}
              </span>
              {product.discount > 0 && (
                <span className="list-original-price">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            <div className="list-product-rating">
              ⭐⭐⭐⭐⭐{" "}
              <span className="list-rating-score">{calculateRating(product)}</span> • 32 orders{" "}
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
