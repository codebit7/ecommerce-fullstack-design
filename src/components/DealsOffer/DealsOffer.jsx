import React, { useEffect, useState } from "react";
import pic1 from './../../assets/Image/tech/5.png'
import pic2 from './../../assets/Image/tech/6.png'
import pic3 from './../../assets/Image/tech/7.png'
import pic4 from './../../assets/Image/tech/8.png'
import pic5 from './../../assets/Image/tech/3.png'

import "./dealsOffer.css"; 
import { useSelector } from "react-redux";

const products = [
  { id: 1, name: "Smart watches", img: pic4, discount: "-25%" },
  { id: 2, name: "Laptops", img: pic3, discount: "-15%" },
  { id: 3, name: "GoPro cameras", img: pic2, discount: "-40%" },
  { id: 4, name: "Headphones", img: pic1, discount: "-25%" },
  { id: 5, name: "Canon cameras", img: pic5, discount: "-25%" },
];

import { token } from "../../Pages/ProductDetailsPage";



const DealsOffer = () => {


  // const token = useSelector((state)=> state.auth.token);
  const [dealsProducts, setDealsProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts =async()=>{
      try {
        const response = await fetch('http://localhost:3000/api/v1/productDeals', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            });
      const p = await response.json();
      setDealsProducts(p.data);
    }
    catch (error) {
      console.error(error);
      }
    }

   fetchProducts();
  },[token]);
  return (
    <div className="deals-offers-container container">
      
      <div className="deals-info">
        <div className="info-content">
        <h3 className="deals-title">Deals and offers</h3>
        <p className="deals-subtitle">Hygiene equipments</p>
        </div>
        <div className="countdown">
          {["04 Days", "13 Hour", "34 Min", "56 Sec"].map((time, index) => (
            <div key={index} className="time-box">
              <span>{time.split(" ")[0]}</span>
              <small>{time.split(" ")[1]}</small>
            </div>
          ))}
        </div>
      </div>

     
      <div className="deals-items">
        {dealsProducts.map((product) => (
          <div key={product.id} className="deal-item">
            <img src={product.img  || pic1} alt={product.name} />
            <p>{product.name}</p>
            <div className="deals-discount">{((product.discount/product.price)*100).toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOffer;
