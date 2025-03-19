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

const ProductDetailsPage = (props) => {

    const [ product ,setProduct] = useState();


   useEffect(()=>{
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/product/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
   },[props.id])
   
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
