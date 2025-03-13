import React from "react";

const ServiceCard = ({ image, Icon, title }) => {
  return (
    <div className="service-card">
      <div className="image-wrapper">
        <img src={image} alt={title} className="service-image" />
      </div>
      <div className="service-icon">
        <Icon/>
      </div>
      <div className="service-content">
        <h3>{title}</h3>
      </div>
      
    </div>
  );
};

export default ServiceCard;
