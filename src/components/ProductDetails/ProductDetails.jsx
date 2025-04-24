import React, { useEffect, useState } from "react";
import "./productDetails.css";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { RiVipCrown2Line } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import img from "./../../assets/Image/flags/icon.png";
import img1 from "./../../assets/Image/interior/1.png";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { calculateRating } from "../ProductList/ProductList";
import { calculateReviews } from "../ProductGrid/ProductGrid";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = ({product}) => {
 
  return (
    <div className="user-product-detail-container container">
      <div className="user-product-image-section">
        <img
          src={product.images?.length > 0 ? product.images[0]?.url : img1}
          alt="Product"
          className="user-main-product-image"
        />
        <div className="user-thumbnail-images">
          {(product.images || []).slice(1).map((img, index) => (
            <img key={index} src={img?.url || img1} alt="Thumbnail" />
          ))}
        </div>
      </div>

      <div className="user-product-info-section">
        <p className="user-stock-status">✔ In stock</p>
        <h2 className="user-product-title">
          {product.description || "No Description Available"}
        </h2>

        <div className="user-rating-section">
          ⭐⭐⭐⭐⭐ <span className="user-rating">{product ? calculateRating(product) : "0.0"}</span>
          <span className="user-reviews">
            <MdMessage /> {product ? calculateReviews(product) : "0"} reviews
          </span>
          <span className="user-sold">
            <RiVipCrown2Line /> 154 sold
          </span>
        </div>

        <div className="user-pricing-section">
          <div className="user-price-box">
            <span className="user-price">${product.price || "0.00"}</span>
            <span className="user-pcs">50-100 pcs</span>
          </div>
          <div className="user-price-box">
            <span className="user-price">
              ${(product.price ? product.price * 5 : 0.00).toFixed(2)}
            </span>
            <span className="user-pcs">100-700 pcs</span>
          </div>
          <div className="user-price-box">
            <span className="user-price">
              ${(product.price ? product.price * 7 : 0.00).toFixed(2)}
            </span>
            <span className="user-pcs">700+ pcs</span>
          </div>
        </div>
      </div>

      <div className="user-supplier-section">
        <div className="user-supplier-box">
          <div className="user-supplier-info">
            <div className="user-supplier-header">
              <span className="user-supplier-icon">R</span>
              <div className="user-header-info">
                <p className="user-supplier-name">Supplier</p>
                <p className="user-company-name">Guanjoi Trading LLC</p>
              </div>
            </div>

            <div className="user-supplier-detail">
              <p className="user-location">
                <img src={img} alt="Flag" /> Germany, Berlin
              </p>
              <p className="user-verification">
                <MdOutlineVerifiedUser /> Verified Seller
              </p>
              <p className="user-shipping">
                <TbWorld /> Worldwide shipping
              </p>
            </div>
          </div>

          <button className="user-inquiry-btn">Send inquiry</button>
          <button className="user-profile-btn">Seller's profile</button>
        </div>

        <div className="user-save-later">
          <FaRegHeart /> Save for later
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
