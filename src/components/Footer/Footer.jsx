import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";
import appStore from './../../assets/Misc/market-button.png'
import logo  from './../../assets/Brand/logo-colored.png'
import FooterBar from "./FooterBar";

const Footer = () => {
  return (
    <>
    <footer className="footer container">
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="brand-logo">
          <img src={logo} />
          </div>
          <p className="brand-description">
            Best information about the company goes here but now lorem ipsum is
          </p>
          <div className="social-icons">
            <div className="icon"><FaFacebookF /></div>
            <div className="icon"><FaTwitter /></div>
            <div className="icon"><FaLinkedinIn /></div>
            <div className="icon"><FaInstagram /></div>
            <div className="icon"><FaYoutube /></div>
          </div>

        </div>

        
        <div className="footer-links">
          <div className="link-column">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Partnership</h4>
            <ul>
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Information</h4>
            <ul>
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="link-column">
            <h4>For users</h4>
            <ul>
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>
        </div>

        
        <div className="footer-app">
          <h4>Get app</h4>
          <img src={appStore} alt="App Store" />
          <img src={appStore} alt="Google Play" />
        </div>
      </div>


      
    </footer>
    <FooterBar/>
    </>
  );
};

export default Footer;
