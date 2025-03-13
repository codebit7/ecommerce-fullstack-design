import React from "react";
import "./relatedProducts.css";

import img1 from './../../assets/Image/tech/1.png'
import img2 from './../../assets/Image/tech/2.png'
import img3 from './../../assets/Image/tech/3.png'
import img4 from './../../assets/Image/tech/4.png'
import img5 from './../../assets/Image/tech/5.png'


const products = [
    
  {
    id: 1,
    image: img1,
    title: "Men Blazers Sets Elegant Formal",
    price: "$7.00 - $99.50",
  },
  {
    id: 2,
    image: img2,
    title: "Men Shirt Sleeve Polo Contrast",
    price: "$7.00 - $99.50",
  },
  {
    id: 3,
    image: img3,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    id: 4,
    image: img4, 
    title: "Basketball Crew Socks Long Stuff",
    price: "$7.00 - $99.50",
  },
  {
    id: 5,
    image: img5, 
    title: "New Summer Men's castrol T-Shirts",
    price: "$7.00 - $99.50",
  },
];

const RelatedProducts = () => {
  return (
    <div className="related-products-container container">
      <h3 className="related-products-title">Related products</h3>
      <div className="related-products-list">
        {products.map((item) => (

          <div key={item.id} className="related-product-item">
            <div className="related-product-image">
            <img src={item.image} alt={item.title}  />
            </div>
            <p className="related-product-name">{item.title}</p>
            <p className="related-product-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
