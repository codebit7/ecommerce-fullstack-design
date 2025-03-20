import React, { useEffect, useState } from 'react'
import ProductDetail from './../components/ProductDetails/ProductDetails'
import Path from './../components/Path/Path'
import ProductInfoTabs from './../components/ProductInfoTabs/ProductInforTabs'
import RecommendationList from './../components/RecommendationList/RecommendationList'
import RelatedProducts from './../components/RelatedProducts/RelatedProducts'
import DiscountBanner from './../components/DiscountBanner/DiscountBanner'
import NavBar from '../components/Header/NavBar'
import TopNav from '../components/Header/TopNav'
import Footer from '../components/Footer/Footer'
import { useLocation, useParams } from 'react-router-dom'

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGQyMTM3Y2Q3NDA3OTBmNmUxZjQyMSIsImVtYWlsIjoiYXNmYXJAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQyNDA3MDY2LCJleHAiOjE3NDI0OTM0NjZ9.qldTUdFprolEFmieYkSDD_K7M38V38NqIOgRE-CBxAc';

const ProductDetailsPage = ({id}) => {

    const [ product ,setProduct] = useState({});
    console.log("Id : ", id);
    

   useEffect(()=>{
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/product/${id}`,
          {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const p = await response.json();
        setProduct(p.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct(); 
   },[id])

   console.log("new Product",product);
   
  return (
    <div>
     
      <Path />
      <ProductDetail product ={product}/>
      <div className="extraInfo container">
         <ProductInfoTabs/>
         <RecommendationList/>
      </div>
      <RelatedProducts/>
      <DiscountBanner/>
      
    </div>
  )
}

export default ProductDetailsPage
