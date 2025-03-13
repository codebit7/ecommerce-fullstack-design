import React from "react";
import "./savedForLater.css";

import img1 from './../../assets/Image/tech/1.png'
import img2 from './../../assets/Image/tech/2.png'
import img3 from './../../assets/Image/tech/3.png'
import img4 from './../../assets/Image/tech/4.png'
import img5 from './../../assets/Image/tech/5.png'
import { FaCartShopping } from "react-icons/fa6";

const savedItems = [
    {
      id: 1,
      image: img1,
      price: 99.5,
      title: "GoPro HERO6 4K Action",
      category: "Camera",
      color: "Black",
    },
    {
      id: 2,
      image: img2,
      price: 99.5,
      title: "iPhone 12 4K Action",
      category: "Phone",
      color: "Blue",
    },
    {
      id: 3,
      image: img3,
      price: 99.5,
      title: "Smart Watch 4K Action",
      category: "Watch",
      color: "Gray",
    },
    {
      id: 4,
      image: img4,
      price: 99.5,
      title: "MacBook Pro 4K Action",
      category: "Laptop",
      color: "Black",
    },
  ];

const SavedForLater = () => {
  return (
    <div className="saved-for-later container">
      <h3>Saved for later</h3>
      <div className="saved-items">
        {savedItems.map((item) => (
          <div key={item.id} className="saved-item">
          <div className="saved-image">
          <img src={item.image} alt={item.title} />
          </div>
            <p className="price">${item.price.toFixed(2)}</p>
            <p className="title">{item.title}</p>
            <p className="details">{item.category} - {item.color}</p>
            <button className="move-to-cart">
               <FaCartShopping/> Move to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedForLater;
