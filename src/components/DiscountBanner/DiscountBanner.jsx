import React from "react";
import "./discountBanner.css";

const DiscountBanner = () => {
  return (
    <div className="discount-banner container">
      <div className="discount-text">
        <h3>Super discount on more than 100 USD</h3>
        <p>Have you ever finally just write dummy info</p>
      </div>
      <div className="discount-button">
        <button>Shop now</button>
      </div>
    </div>
  );
};

export default DiscountBanner;
