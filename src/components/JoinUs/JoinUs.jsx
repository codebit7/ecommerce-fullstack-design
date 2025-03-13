import React from 'react'
import './styles.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";

const JoinUs = () => {
  return (
    <div className="newsletter-container">
    <h2 className="title">Subscribe on our newsletter</h2>
    <p className="description">
      Get daily news on upcoming offers from many suppliers all over the world
    </p>
    <div className="input-container">
      <div className="email-input">
        <FaRegEnvelope className="email-icon" />
        <input type="email" placeholder="Email" />
      </div>
      <button className="subscribe-button">Subscribe</button>
    </div>
  </div>
  )
}

export default JoinUs
