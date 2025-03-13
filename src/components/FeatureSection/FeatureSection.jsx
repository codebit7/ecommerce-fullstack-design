import React from "react";
import "./FeatureSection.css";
import { FaLock, FaCommentDots, FaTruck } from "react-icons/fa"; 

const features = [
  { id: 1, icon: <FaLock />, title: "Secure payment", text: "Have you ever finally just" },
  { id: 2, icon: <FaCommentDots />, title: "Customer support", text: "Have you ever finally just" },
  { id: 3, icon: <FaTruck />, title: "Free delivery", text: "Have you ever finally just" },
];

const FeatureSection = () => {
  return (
    <div className="feature-section container">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          <div className="icon">{feature.icon}</div>
          <div className="feature-content">
            <p className="feature-title">{feature.title}</p>
            <p className="feature-text">{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
