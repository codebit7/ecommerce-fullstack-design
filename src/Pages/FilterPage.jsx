import React, { useEffect, useState } from "react";
import ProductFilter from "./../components/Product Filters/ProductFilters";
import Path from "./../components/Path/Path";
import FilterBar from "./../components/Filter Bar/FilterBar"; 
import FilterTags from "./../components/Product Filters/Filter Tags/FilterTags"; 
import './pagesStyle.css'


import  img1 from './../assets/Image/tech/1.png'
import  img2 from './../assets/Image/tech/2.png'
import  img3 from './../assets/Image/tech/3.png'
import  img4 from './../assets/Image/tech/4.png'
import  img5 from './../assets/Image/tech/5.png'

import  img6 from './..//assets/Image/tech/6.png'
import ProductList from "./../components/ProductList/ProductList";
import ProductGrid from './../components/ProductGrid/ProductGrid'
import Pagination from './../components/Pagination/Pagination'
import JoinUs from "../components/JoinUs/JoinUs";
import NavBar from "../components/Header/NavBar";
import TopNav from "../components/Header/TopNav";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/slices/productSlice";




// const products = [
//   {
//     id: 1,
//     image: img1,
//     title: "Samsung Galaxy S23 Ultra - 512GB",
//     price: 999.99,
//     oldPrice: 1299.0,
//     rating: 4.9,
//     reviews: 320,
//     orders: 600,
//     description:
//       "Samsung's most advanced smartphone with S-Pen support and incredible camera.",
//     freeShipping: true,
//     category: "Smartphones",
//     condition: "Brand-new",
//     publishDate: "2024-03-10",
//     brand: "Samsung",
//   },
//   {
//     id: 2,
//     image: img2,
//     title: "iPhone 14 Pro Max - 256GB",
//     price: 899.99,
//     oldPrice: 1199.0,
//     rating: 4.8,
//     reviews: 290,
//     orders: 550,
//     description:
//       "Experience Apple's best smartphone with ProMotion display and enhanced camera.",
//     freeShipping: true,
//     category: "Smartphones",
//     condition: "Brand-new",
//     publishDate: "2024-02-15",
//     brand: "Apple",
//   },
//   {
//     id: 3,
//     image: img3,
//     title: "Huawei FreeBuds Pro 2",
//     price: 199.99,
//     oldPrice: 249.0,
//     rating: 4.7,
//     reviews: 180,
//     orders: 320,
//     description:
//       "Premium wireless earbuds with noise cancellation and superior sound quality.",
//     freeShipping: true,
//     category: "Mobile accessory",
//     condition: "Any",
//     publishDate: "2024-01-20",
//     brand: "Huawei",
//   },
//   {
//     id: 4,
//     image: img4,
//     title: "Poco X4 Pro 5G - 256GB",
//     price: 349.99,
//     oldPrice: 399.0,
//     rating: 4.6,
//     reviews: 180,
//     orders: 300,
//     description:
//       "A powerful mid-range smartphone with a 120Hz display and 108MP camera.",
//     freeShipping: true,
//     category: "Smartphones",
//     condition: "Refurbished",
//     publishDate: "2023-12-10",
//     brand: "Poco",
//   },
//   {
//     id: 5,
//     image: img5,
//     title: "Lenovo Legion 5 Pro - Gaming Laptop",
//     price: 999.99,
//     oldPrice: 1299.0,
//     rating: 4.8,
//     reviews: 250,
//     orders: 450,
//     description:
//       "A high-performance gaming laptop with RTX graphics and a 165Hz display.",
//     freeShipping: true,
//     category: "Electronics",
//     condition: "Old items",
//     publishDate: "2024-03-01",
//     brand: "Lenovo",
//   },
//   {
//     id: 6,
//     image: img6,
//     title: "Samsung Smartwatch Galaxy Watch 5",
//     price: 299.99,
//     oldPrice: 349.0,
//     rating: 4.7,
//     reviews: 220,
//     orders: 400,
//     description:
//       "A premium smartwatch with fitness tracking, ECG, and long battery life.",
//     freeShipping: true,
//     category: "Modern tech",
//     condition: "Brand-new",
//     publishDate: "2024-02-25",
//     brand: "Samsung",
//   },
// ];



const FilterPage = () => {


   
   const [layoutToggle, setLayoutToggle] = useState(false);

   const dispatch = useDispatch();
   const { products, totalProducts,totalPage } = useSelector((state) => state.products);


   const [pagenationSetting, setPaginationSetting] = useState({
      limit:10,
      page:1
   });
   
   const [filters, setFilters] = useState({
     category:"All",
     priceRange:[0,7000],
     rating:0,
     search:"",
     condition:"Any",
     brands:[],
     Featured:"Featured",
   });
   const [filteredProduct,setFilteredProduct] = useState(products);

   useEffect(() => {
    const applyFilters = () => {
      

      const filtered = products.filter((product) => 
        (filters.category !=="All" ? product.category === filters.category : true) &&
        (filters.priceRange ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1] : true) &&
        (filters.condition !== "Any" ? product.condition === filters.condition : true) &&
        (filters.rating ? product.rating >= filters.rating : true) &&
        (filters.brands.length > 0 ? filters.brands.includes(product.brand) : true)
      );
  
      
      setFilteredProduct(filtered);
    };

    applyFilters();
  }, [filters,products]);
  



  useEffect(()=>{
    dispatch(fetchProducts(pagenationSetting));
  },[pagenationSetting,dispatch])



   
   const handleFilterChange =(key, value)=>{
        setFilters((prevFilters)=>{
          return {...prevFilters, [key]:value};
        })
   }




   

  return (
    <>

   
    <Path />
    <div className="container">
      
      <div className="product-container">
        <ProductFilter
           handleFilters= {handleFilterChange}
           filters={filters}
           />
        <div className="products-section">
      
          <FilterBar
           totalItems={totalProducts}
           filters={filters} 
           setLayoutToggle={setLayoutToggle}
           handleFilter={handleFilterChange}

          />

          <FilterTags
            tags={filters.brands}
            handleFilter={handleFilterChange} 
            />

          <div className="products-container">
          {
            
            layoutToggle ? 
                 <ProductGrid products={filteredProduct}/>
                         :<ProductList products={filteredProduct}/>
          }
          </div>
          
          <Pagination 
            totalPages={totalPage}
            setSetting = {setPaginationSetting}
          />

        </div>
      </div>

    </div>
    <JoinUs/>
    
    </>
  );
};

export default FilterPage;
