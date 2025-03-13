import React, { useState } from "react";
import "./productInfoTabs.css";

const ProductInfoTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product-tabs-container">
     
      <div className="tabs">
        {["Description", "Reviews", "Shipping", "About seller"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${
              activeTab === tab.toLowerCase() ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

     
      <div className="tab-content">
        {activeTab === "description" && (
          <div>
            <p className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, nostrum nam autem saepe earum soluta sed natus adipisci fuga magni.
            </p>

            
            <table className="product-specs">
              <tbody>
                <tr>
                  <td>Model</td>
                  <td>#8786867</td>
                </tr>
                <tr>
                  <td>Style</td>
                  <td>Classic style</td>
                </tr>
                <tr>
                  <td>Certificate</td>
                  <td>ISO-898921212</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>34mm x 450mm x 19mm</td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td>36GB RAM</td>
                </tr>
              </tbody>
            </table>

           
            <ul className="feature-list">
              <li>Some great feature name here</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Duis aute irure dolor in reprehenderit</li>
              <li>Some great feature name here</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && <p className="tab-placeholder">Reviews Content...</p>}
        {activeTab === "shipping" && <p className="tab-placeholder">Shipping Information...</p>}
        {activeTab === "about seller" && <p className="tab-placeholder">Seller Information...</p>}
      </div>
    </div>
  );
};

export default ProductInfoTabs;
