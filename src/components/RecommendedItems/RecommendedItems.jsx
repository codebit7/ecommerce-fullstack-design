import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./recommendedItems.css";


import smartphone from './../../assets/Image/tech/1.png'
import cameras from './../../assets/Image/tech/6.png'
import laptops from './../../assets/Image/tech/7.png'
import smartwatch from './../../assets/Image/tech/8.png'
import smartTablet from './../..//assets/Image/tech/2.png'
import headPhone from './../../assets/Image/tech/9.png'
import GamingSet from './../../assets/Image/tech/5.png'
import { useSelector } from "react-redux";



// const products = [
//   { id: 1, image:smartphone , title: "T-shirts with multiple colors, for men", price: "10.30" },
//   { id: 2, image: cameras, title: "Jeans shorts for men blue color", price: "10.30" },
//   { id: 3, image:laptops, title: "Brown winter coat medium size", price: "12.50" },
//   { id: 4, image: smartwatch, title: "Jeans bag for travel for men", price: "34.00" },
//   { id: 5, image: smartTablet, title: "Leather wallet", price: "99.00" },
//   { id: 6, image: headPhone, title: "Canon camera black, 100x zoom", price: "9.99" },
//   { id: 7, image: GamingSet, title: "Headset for gaming with mic", price: "8.99" },
//   { id: 8, image: cameras, title: "Smartwatch silver color modern", price: "10.30" },
//   { id: 9, image: laptops, title: "Blue wallet for men leather material", price: "10.30" },
//   { id: 10, image: smartphone, title: "Jeans bag for travel for men", price: "80.95" },
// ];

const RecommendedItems = () => {

  const token = useSelector((state) => state.auth.token);
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchRecommendItems = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/users/recommendedProducts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch recommended products");
        }

        const data = await res.json();
        setProducts(data); 
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      }
    };

    fetchRecommendItems();
  }, [token]); 


  return (
    <div className="recommended-items container">
      <h2>Recommended items</h2>
      <div className="recommend-product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
