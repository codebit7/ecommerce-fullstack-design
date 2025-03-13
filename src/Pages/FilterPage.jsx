import React, { useState } from "react";
import ProductFilter from "./../components/Product Filters/ProductFilters";
import Path from "./../components/Path/Path";
import FilterBar from "./../components/Filter Bar/FilterBar"; 
import FilterTags from "./../components/Product Filters/Filter Tags/FilterTags"; 
import './pagesStyle.css'


import  img1 from './../assets/Image/tech/1.png'
import  img2 from './../assets/Image/tech/2.png'
import  img3 from './../assets/Image/tech/3.png'
import  img4 from './../assets/Image/tech/4.png'

import  img6 from './..//assets/Image/tech/6.png'
import ProductList from "./../components/ProductList/ProductList";
import ProductGrid from './../components/ProductGrid/ProductGrid'
import Pagination from './../components/Pagination/Pagination'
import JoinUs from "../components/JoinUs/JoinUs";




const products = [
  {
    id: 1,
    image: img1,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
    oldPrice: 128.00,
    rating: 5.0,
    reviews: 75,
    orders: 154,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    freeShipping: true,
  },
  {
    id: 2,
    image: img2,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
    oldPrice: 128.00,
    rating: 5.0,
    reviews: 75,
    orders: 154,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    freeShipping: true,
  },
  {
    id: 3,
    image: img2,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
    oldPrice: 128.00,
    rating: 5.0,
    reviews: 75,
    orders: 154,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    freeShipping: true,
  },
  {
    id: 4,
    image: img3,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
    oldPrice: 128.00,
    rating: 5.0,
    reviews: 75,
    orders: 154,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    freeShipping: true,
  },
  {
    id: 5,
    image: img4,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
    oldPrice: 128.00,
    rating: 5.0,
    reviews: 75,
    orders: 154,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    freeShipping: true,
  },
  {
    id: 6,
    image: img6,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
    oldPrice: 128.00,
    rating: 5.0,
    reviews: 75,
    orders: 154,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    freeShipping: true,
  },
];

const FilterPage = () => {

   const [layoutToggle, setLayoutToggle] = useState(false)

  return (
    <>
    <Path />
    <div className="container">
      
      <div className="product-container">
        <ProductFilter />
        <div className="products-section">
      
          <FilterBar totalItems={12911} category="Mobile accessory" setLayoutToggle={setLayoutToggle} />
          <FilterTags />
          {
            layoutToggle ? <ProductGrid products={products}/>:<ProductList products={products}/>
          }
          
          
          <Pagination/>

        </div>
      </div>

    </div>
    <JoinUs/>
    </>
  );
};

export default FilterPage;
