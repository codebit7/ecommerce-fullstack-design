import React, { useEffect, useState } from "react";
import "./filterTags.css";
import { IoMdClose } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const FilterTags = ({tags,handleFilter}) => {
  
  return (
    <div className="filter-tags">
      {tags.map((filter, index) => (
        <div key={index} className="filter-tag">
            <span>{filter}</span>
            <span onClick={()=>handleFilter('brands',tags.filter(item=>item !== filter))}><CgClose/></span>
        </div>
      ))}
      {tags.length > 0 && (
        <button className="clear-all" onClick={()=>handleFilter('brands',[])}>
          Clear all filter
        </button>
      )}
    </div>
  );
};

export default FilterTags;
