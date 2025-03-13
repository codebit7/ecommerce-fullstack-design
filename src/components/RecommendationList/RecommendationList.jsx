import React from "react";
import "./recommendationList.css";


import img1 from './../../assets/Image/tech/1.png'
import img2 from './../../assets/Image/tech/2.png'
import img3 from './../../assets/Image/tech/3.png'
import img4 from './../../assets/Image/tech/4.png'
import img5 from './../../assets/Image/tech/5.png'


const recommendations = [
    
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
  {
    id: 5,
    image: img5, 
    title: "New Summer Men's castrol T-Shirts",
    price: "$7.00 - $99.50",
  },
  {
    id: 5,
    image: img5, 
    title: "New Summer Men's castrol T-Shirts",
    price: "$7.00 - $99.50",
  },
  {
    id: 5,
    image: img5, 
    title: "New Summer Men's castrol T-Shirts",
    price: "$7.00 - $99.50",
  },
  {
    id: 5,
    image: img5, 
    title: "New Summer Men's castrol T-Shirts",
    price: "$7.00 - $99.50",
  },

];

const RecommendationList = () => {
  return (
    <div className="recommendation-container">
      <h3 className="recommendation-title">You may like</h3>
      <ul className="recommendation-list">

        {
        recommendations.map((item) => (

          <li key={item.id} className="recommendation-item">

             <div className="recommendation-image">
            <img src={item.image} alt={item.title} className="" />
            </div>
            <div className="recommendation-info">
              <p className="recommendation-name">{item.title}</p>
              <p className="recommendation-price">{item.price}</p>
            </div>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
