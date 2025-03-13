import React, { useState } from "react";
import "./filterTags.css";
import { IoMdClose } from "react-icons/io";

const FilterTags = () => {
  const [filters, setFilters] = useState([
    "Samsung",
    "Apple",
    "Poco",
    "Metallic",
    "4 star",
    "3 star",
  ]);

  const removeFilter = (filter) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  
  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
    <div className="filter-tags">
      {filters.map((filter, index) => (
        <div key={index} className="filter-tag">
            <span>{filter}</span>
          
        </div>
      ))}
      {filters.length > 0 && (
        <button className="clear-all" onClick={clearAllFilters}>
          Clear all filter
        </button>
      )}
    </div>
  );
};

export default FilterTags;
