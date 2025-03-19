import React, { useEffect, useState } from "react";
import "./productFilters.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../Store/slices/productSlice";

const ProductFilter = () => {
  const [openSections, setOpenSections] = useState({
    category: true,
    brands: true,
    features: true,
    price: true,
    condition: true,
    ratings: true,
  });
  
  const [minValue, setMinValue] = useState(300);
  const [maxValue, setMaxValue] = useState(7000);

  const {filters} = useSelector((state)=>state.products)
  const dispatch = useDispatch();
 

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value < maxValue - 100) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value > minValue + 100) {
      setMaxValue(value);
    }
  };

  const handleRangeChange = (type, value) => {
    if (type === "min") {
      if (value < maxValue - 100) {
        setMinValue(value);
      }
    } else {
      if (value > minValue + 100) {
        setMaxValue(value);
      }
    }
  };


 

  
  return (
    <div className="filter-sidebar">
     
      <div className="filter-section">
        <div className="filter_header" onClick={() => toggleSection("category")}>
          <h4>Category</h4>
          <div className="arrow">{openSections.category ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
        {openSections.category && (
          <ul>
            {
              ['All','Mobile accessory','Electronics','Smartphones','Modern tech'].map((item)=>(
                <li key={item} onClick={() => dispatch(updateFilter({ key: "category", value: item }))}>{item}</li>
              ))
            }
            <li className="see-all">See all</li>
          </ul>
        )}
      </div>

      
      <div className="filter-section">
        <div className="filter_header" onClick={() => toggleSection("brands")}>
          <h4>Brands</h4>
          <div className="arrow">{openSections.brands ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
        {openSections.brands && (
          <ul>
            {["Samsung", "Apple", "Huawei", "Poco", "Lenovo"].map((brand) => (
       <li key={brand}>
        <input
      type="checkbox"
      checked={filters.brands.includes(brand)}
      id={brand}
      onChange={(e) => {
        const updatedBrands = e.target.checked
          ? [...filters.brands, brand]
          : filters.brands.filter((b) => b !== brand);

          dispatch(updateFilter({ key: "brands", value: updatedBrands }))
      }}
    />
    <label htmlFor={brand}>{brand}</label>
  </li>
))}

            <li className="see-all">See all</li>
          </ul>
        )}
      </div>

      
      <div className="filter-section">
        <div className="filter_header" onClick={() => toggleSection("price")}>
          <h4>Price</h4>
          <div className="arrow">{openSections.price ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
        {openSections.price && (
          <div className="price-filter">
            <div className="range-container">
              <input
                type="range"
                min="0"
                max="10000"
                value={minValue}
                onChange={(e) => handleRangeChange("min", Number(e.target.value))}
                className="range-input"
              />
              <input
                type="range"
                min="0"
                max="10000"
                value={maxValue}
                onChange={(e) => handleRangeChange("max", Number(e.target.value))}
                className="range-input"
              />
              <div
                className="range-track"
                style={{
                  left: `${(minValue / 10000) * 100}%`,
                  width: `${((maxValue - minValue) / 10000) * 100}%`,
                }}
              ></div>
            </div>
            <div className="price-inputs">
              <input
                type="number"
                value={minValue}
                onChange={handleMinChange}
                placeholder="Min"
              />
              <input
                type="number"
                value={maxValue}
                onChange={handleMaxChange}
                placeholder="Max"
              />
            </div>
            <button className="apply-btn" onClick={() => dispatch(updateFilter({ key: "priceRange", value: [minValue, maxValue] }))}>Apply</button>
          </div>
        )}
      </div>

    
      <div className="filter-section">
        <div className="filter_header" onClick={() => toggleSection("condition")}>
          <h4>Condition</h4>
          <div className="arrow">{openSections.condition ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
        {openSections.condition && (
          <div>
            {["Any", "Refurbished", "Brand-new", "Old items"].map((condition) => (
              <div key={condition}>
                <input 
                type="radio"
                name="condition" 
                value = {condition}
                checked= {filters.condition == condition}
                onChange ={()=>{
                  dispatch(updateFilter({key:'conditon', value:condition}));
                }}
                 />
                <label htmlFor={condition}>{condition}</label>
              </div>
            ))}
          </div>
        )}
      </div>

    
      <div className="filter-section">
        <div className="filter_header" onClick={() => toggleSection("ratings")}>
          <h4>Ratings</h4>
          <div className="arrow">{openSections.ratings ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
        {openSections.ratings && (
          <div>
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="rating-item">
                <input type="checkbox"
                 id={`rating-${stars}`}
                 checked = {filters.rating === stars}
                 onChange={()=> dispatch(updateFilter({key: 'rating',value: stars}))}
                  />
                <label htmlFor={`rating-${stars}`}>
                  {"★".repeat(stars)} {"☆".repeat(5 - stars)}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
