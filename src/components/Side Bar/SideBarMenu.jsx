import React from "react";
import "./SidebarMenu.css";
import { FaHome, FaList, FaHeart, FaShoppingBag, FaGlobe, FaPhone, FaInfoCircle } from "react-icons/fa";

const SidebarMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-header">
          <div className="user-icon"></div>
          <span>Sign in | Register</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <ul className="sidebar-menu">
          <li><FaHome /> Home</li>
          <li><FaList /> Categories</li>
          <li><FaHeart /> Favorites</li>
          <li><FaShoppingBag /> My orders</li>
        </ul>

        <ul className="sidebar-menu">
          <li><FaGlobe /> English | USD</li>
          <li><FaPhone /> Contact us</li>
          <li><FaInfoCircle /> About</li>
        </ul>

        <ul className="sidebar-footer">
          <li>User agreement</li>
          <li>Partnership</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
