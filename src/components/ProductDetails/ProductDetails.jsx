import React from "react";
import "./productDetails.css";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { RiVipCrown2Line } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import img from './../../assets/Image/flags/icon.png'


import img1 from './../../assets/Image/interior/1.png'
// import img1 from './../../assets/Image/interior/1.png'
// import img1 from './../../assets/Image/interior/1.png'
// import img1 from './../../assets/Image/interior/1.png'

import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const ProductDetail = () => {
  return (
    <div className="product-detail-container container">
      

      <div className="product-image-section">
        <img
          src={img1} 
          alt="Product"
          className="main-product-image"
        />
        <div className="thumbnail-images">
          <img src={img1} alt="Thumbnail" />
          <img src={img1} alt="Thumbnail" />
          <img src={img1} alt="Thumbnail" />
          <img src={img1} alt="Thumbnail" />
        </div>
      </div>

   
      <div className="product-info-section">
        <p className="stock-status">✔ In stock</p>
        <h2 className="product-title">
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </h2>
        <div className="rating-section">
        ⭐⭐⭐⭐⭐ <span className="rating">9.3 .</span>

          <span className="reviews"><MdMessage/>  32 reviews</span>
          <span className="sold"><RiVipCrown2Line/> 154 sold</span>
        </div>

       
        <div className="pricing-section">
          <div className="price-box">
            <span className="price">$98.00</span>
            <span className="pcs">50-100 pcs</span>
          </div>
          <div className="price-box">
            <span className="price">$90.00</span>
            <span className="pcs">100-700 pcs</span>
          </div>
          <div className="price-box">
            <span className="price">$78.00</span>
            <span className="pcs">700+ pcs</span>
          </div>
        </div>

        
        <div className="additional-info">
          <div className="text-content">
           <p>Price</p>
           <span>Negotiable </span>
          </div>
          
          <hr />

          <div className="text-content">
           <p>Type: </p>
           <span>Classic shoes </span>
          </div>
          
          <div className="text-content">
           <p>Material: </p>
           <span>Plastic material </span>
          </div>


          <div className="text-content">
           <p>Design: </p>
           <span>Modern nice </span>
          </div>
          
          <hr />

          <div className="text-content">
           <p>Customization: </p>
           <span> Customized logo and design custom packages </span>
          </div>
          
          <div className="text-content">
           <p>Protection:</p>
           <span>Refund Policy </span>
          </div>


          <div className="text-content">
           <p>Warranty: </p>
           <span> 2 years full warranty </span>
          </div>
          <hr />
        </div>
      </div>

    
      <div className="supplier-section">
        <div className="supplier-box">
          <div className="supplier-info">
             <div className="supplier-header">
                <span className="supplier-icon">R</span>
                <div className="header-info">
                  <p className="supplier-name">Supplier</p>
                  <p className="company-name">Guanjoi Trading LLC</p>
                </div>
             </div>
            
           
            <div className="supplier-detail">
              
              <p className="location"><img src={img} alt="" /> Germany, Berlin</p>
              <p className="verification"><MdOutlineVerifiedUser /> Verified Seller</p>
              <p className="shipping"><TbWorld/> Worldwide shipping</p>
            </div>
          </div>
          <button className="inquiry-btn">Send inquiry</button>
          <button className="profile-btn">Seller's profile</button>
         
        </div>
        <div className="save-later">
            <FaRegHeart /> Save for later
          </div>
      </div>
    </div>
  );
};

export default ProductDetail;