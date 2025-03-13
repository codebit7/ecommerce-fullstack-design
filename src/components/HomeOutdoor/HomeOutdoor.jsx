import React from "react";
import "./HomeOutdoor.css";


const HomeOutdoor = ({products,info}) => {
  return (
    <div className="home-outdoor-container container">
    
      <div className="home-outdoor-info">
        <img src={info.image} alt=""  className="info-image" />
        <div className="content">

          <h2 className="home-outdoor-title">{info.title}</h2>
          <button className="source-btn">Source now →</button>
        </div>
      </div>

      
      <div className="home-outdoor-items">
        {products.map((product, index) => (
          <div className="home-outdoor-item" key={index}>
            <img src={product.img} alt={product.name} />
            <p>{info.title}</p>
            <span className="product-price">From {product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOutdoor;
