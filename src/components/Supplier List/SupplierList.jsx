import React from "react";
import "./supplierList.css";

import uae from './../../assets/Image/flags/icon.png';
import china from './../../assets/Image/flags/icon(1).png';
import ger from './../../assets/Image/flags/icon(2).png';
import denmark from './../../assets/Image/flags/icon(4).png';
import france from './../../assets/Image/flags/icon(5).png';
import uk from './../../assets/Image/flags/icon(6).png';
import itley from './../../assets/Image/flags/icon(7).png';
import russia from './../../assets/Image/flags/icon(8).png';
import usa from './../../assets/Image/flags/icon(9).png';
import aus from './../../assets/Image/flags/icon(10).png';

const suppliers = [
  { flag: uae, country: "Arabic Emirates", domain: "shopname.ae" },
  { flag: aus, country: "Australia", domain: "shopname.ae" },
  { flag: usa, country: "United States", domain: "shopname.ae" },
  { flag: china, country: "China", domain: "shopname.ae" },
  { flag: russia, country: "Russia", domain: "shopname.ru" },
  { flag: denmark, country: "Denmark", domain: "denmark.com.dk" },
  { flag: france, country: "France", domain: "shopname.com.fr" },
  { flag: itley, country: "Italy", domain: "shopname.it" },
  { flag: ger, country: "Great Britain", domain: "shopname.co.uk" },
  { flag: china, country: "China", domain: "shopname.ae" },
];

const SupplierList = () => {
  return (
    <div className="suppliers container">
      <p className="supplier-header">Suppliers by region</p>
      <div className="suppliers-grid">
        {suppliers.map((supplier, index) => (
          <div key={index} className="supplier-item">
            <img src={supplier.flag} alt="flags" className="flag" />
            <div className="user-supplier-info">
              <p className="country">{supplier.country}</p>
              <p className="domain">{supplier.domain}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierList;
