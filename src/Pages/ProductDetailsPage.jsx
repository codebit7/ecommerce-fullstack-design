import React from 'react'
import ProductDetail from './../components/ProductDetails/ProductDetails'
import Path from './../components/Path/Path'
import ProductInfoTabs from './../components/ProductInfoTabs/ProductInforTabs'
import RecommendationList from './../components/RecommendationList/RecommendationList'
import RelatedProducts from './../components/RelatedProducts/RelatedProducts'
import DiscountBanner from './../components/DiscountBanner/DiscountBanner'
import NavBar from '../components/Header/NavBar'
import TopNav from '../components/Header/TopNav'
import Footer from '../components/Footer/Footer'

const ProductDetailsPage = () => {
  return (
    <div>
     
      <Path />
      <ProductDetail/>
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
