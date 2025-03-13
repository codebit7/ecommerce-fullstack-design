import React from "react";
import ServiceCard from "./ServiceCard";
import "./ExtraServices.css";

import service1 from './../../assets/services/service1.jpg'
import service2 from './../../assets/services/service2.jpg'
import service3 from './../../assets/services/service3.jpg'
import service4 from './../../assets/services/service4.jpg'

import { CiSearch } from "react-icons/ci";
import { GiCheckedShield } from "react-icons/gi";
import { FaBoxArchive } from "react-icons/fa6";
import { RxPaperPlane } from "react-icons/rx";

const services = [
  { id: 1, image: service1, Icon: CiSearch, title: "Source from  Industry Hubs" },
  { id: 2, image: service2, Icon: FaBoxArchive, title: "Customize Your  Products" },
  { id: 3, image: service3, Icon: RxPaperPlane, title: "Fast, reliable shipping  by ocean or air" },
  { id: 4, image: service4, Icon: GiCheckedShield, title: "Product monitoring  and inspection" },
];

const ExtraServices = () => {
  return (
    <div className="extra-services container">
      <h2>Our extra services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
