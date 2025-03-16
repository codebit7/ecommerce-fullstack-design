import React, { useState } from "react";
import { FaTh, FaBars } from "react-icons/fa";
import "./filterBar.css";

const FilterBar = ({ totalItems,setLayoutToggle ,handleFilter,filters}) => {
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="filter-bar">
     
      <span className="item-count">
        {totalItems.toLocaleString()} items in <strong>{filters.category}</strong>
      </span>

      <div className="filter-options">
        
       
         <div className="verified-checkbox">
          <input
            id="verified-only-checkbox"
            type="checkbox"
            checked={isVerifiedOnly}
            onChange={(e) => setIsVerifiedOnly(e.target.checked)}
          />

        <label className="verified-only" htmlFor="verified-only-checkbox">
        Verified only
        </label>
        </div>
         
        

        
        <select
          className="sort-dropdown"
          value={filters.Featured}
          onChange={(e) => handleFilter('Featured',e.target.value)}
        >
          <option value="Featured">Featured</option>
          <option value="Newest">Newest</option>
          <option value="Price: Low to High">Low to High</option>
          <option value="Price: High to Low">High to Low</option>
        </select>

        
        <div className="view-toggle">
          <button
            className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() =>{
              setViewMode("grid")
              setLayoutToggle(true);
              console.log('grid')
            } }
          >
            <FaTh />
          </button>
          <button
            className={`view-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() =>{
              setViewMode("list")
              setLayoutToggle(false);
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
