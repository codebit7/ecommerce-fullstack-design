import { useState } from "react";
import './catStyles.css';
import hero_image from './../../assets/Brand/hero_image.jpg';
import profile from './../../assets/Form/file/profile.png';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const categories = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];

const CategoryBanner = () => {
  const [activeCategory, setActiveCategory] = useState("Automobiles");
 const {isAuthenticated} = useSelector((state)=> state.auth)
const dispatch =  useDispatch();
 const navigate = useNavigate();

  return (
    <div className="category-banner-container container">
      
     
      <div className="category-sidebar">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-item ${
              activeCategory === category ? "active-category" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      
      <div className="banner">
        <div className="banner-text">
          <p className="trending-text">Latest trending</p>
          <h2 className="electronic-text">Electronic items</h2>
          <button className="learn-btn">Learn more</button>
        </div>
        <img src={hero_image} alt="Electronics" className="banner-image" />
      </div>

      
      <div className="my-user-box">
        <div className="user-card ">
          <div className="userBox">
            <img src={profile} alt="User" className="user-image" />
            <p className="user-text">Hi, user <br /> let's get stated</p>
          </div>
          <button className="join-btn">Join now</button>
         {
          isAuthenticated ?<button className="login-btn" onClick={() => dispatch(logout())}>Logout</button>:
          <button className="login-btn" onClick={() =>navigate('/auth/login') }>Login</button>
         } 
        </div>
        <div className="offer-card ">Get US $10 off<br /> with a new <br /> supplier</div>
        <div className="quote-card ">Send quotes with <br />supplier <br /> preferences</div>
      </div>
    </div>
  );
};

export default CategoryBanner;
