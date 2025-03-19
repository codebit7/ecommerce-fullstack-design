import React, { useEffect, useState } from "react";
import "./filterTags.css";
import { IoMdClose } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../../Store/slices/productSlice";

const FilterTags = () => {
  const {filters} = useSelector((state)=>state.products);
  const dispatch = useDispatch();
  
  return (
    <div className="filter-tags">
      {filters.brands.map((filter, index) => (
        <div key={index} className="filter-tag">
            <span>{filter}</span>
            <span onClick={()=>dispatch(updateFilter({key:'brands',value: filters.brands.filter(item=> item !==filter)}))}><CgClose/></span>
        </div>
      ))}
      {filters.brands.length > 0 && (
        <button className="clear-all" onClick={()=>dispatch(updateFilter({key:'brands',value:[]}))}>
          Clear all filter
        </button>
      )}
    </div>
  );
};

export default FilterTags;
