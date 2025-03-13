import React from 'react'



import sofa from './../assets/Image/interior/1.png'
import plant from './../assets/Image/interior/4.png'
import kitchenDish from './../assets/Image/interior/5.png'
import lamp from './../assets/Image/interior/6.png'
import homeAppliance from './../assets/Image/interior/7.png'
import blender from './../assets/Image/interior/8.png'
import kitchenMixer from './../assets/Image/interior/9.png'
import bowl from './../assets/Image/interior/3.png'
import infoPic from './../assets/Image/interior/12.jpg'
import techInfo from './../assets/Image/interior/13.jpg'


import smartphone from './../assets/Image/tech/1.png'
import cameras from './../assets/Image/tech/6.png'
import laptops from './../assets/Image/tech/7.png'
import smartwatch from './../assets/Image/tech/8.png'
import smartTablet from './../assets/Image/tech/2.png'
import headPhone from './../assets/Image/tech/9.png'
import GamingSet from './../assets/Image/tech/5.png'
import smartkattle from './../assets/Image/interior/10.png'


import RequestQuote from './../components/RequestQuote/RequestQuote'
import RecommendedItems from './../components/RecommendedItems/RecommendedItems'
import ExtraServices from './../components/Extra Services/ExtraServices'
import SuppliersList from './../components/Supplier List/SupplierList'
import JoinUs from './../components/JoinUs/JoinUs'
import CategoryBanner from './../components/CategoryBanner/CategoryBanner'

import DealsOffer from './../components/DealsOffer/DealsOffer'
import HomeOutdoor from './../components/HomeOutdoor/HomeOutdoor'
const HomePage = () => {


    const Homeproducts = [
        { id: 1, name: "Soft chairs", price: "USD 19", img: sofa },
        { id: 2, name: "Sofa & chair", price: "USD 19", img: lamp},
        { id: 3, name: "Kitchen dishes", price: "USD 19", img:kitchenDish },
        { id: 4, name: "Smart watches", price: "USD 19", img: bowl},
        { id: 5, name: "Kitchen mixer", price: "USD 100", img: kitchenMixer },
        { id: 6, name: "Blenders", price: "USD 39", img: blender },
        { id: 7, name: "Home appliance", price: "USD 19", img: homeAppliance},
        { id: 8, name: "Coffee maker", price: "USD 10", img:plant},
      ];
    
    
      const Techproducts =
      [
        { id: 1, name: "Smart watches", price: "USD 19", img: smartwatch },
        { id: 2, name: "Cameras", price: "USD 89", img: cameras},
        { id: 3, name: "Headphones", price: "USD 10", img:headPhone },
        { id: 4, name: "Electric kattle", price: "USD 90", img: smartkattle},
        { id: 5, name: "Gaming set", price: "USD 35", img: GamingSet },
        { id: 6, name: "Laptops & PC", price: "USD 340", img: laptops },
        { id: 7, name: "Smartphones", price: "USD 19", img: smartTablet},
        { id: 8, name: "mobiles", price: "USD 240", img:smartphone},
      ];

     const  homeCover={
            image:infoPic,
            title:"Home and Outdoor"
      }
    const  techCover ={
         image:techInfo,
        title:"Consumer Electronics and gedgets"
    }
    
  return (
    <div>
      <CategoryBanner/>
     <DealsOffer/>
     <HomeOutdoor products={Homeproducts} info ={homeCover}/>
     <HomeOutdoor products={Techproducts} info ={techCover}/>
     <RequestQuote/>
     <RecommendedItems/>
     <ExtraServices/>
     <SuppliersList/>
     <JoinUs/>
    </div>
  )
}

export default HomePage
