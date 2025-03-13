import React from 'react'
import ShoppingCart from './../components/ShoppingCart/ShoppingCart'
import SavedForLater from './../components/SavedForLater/SavedForLater'
import FeatureSection from './../components/FeatureSection/FeatureSection'
import DiscountBanner from './../components/DiscountBanner/DiscountBanner'
const CartPage = () => {
  return (
    <div >
      
      <ShoppingCart/>
      <FeatureSection/>
      <SavedForLater/>
      <DiscountBanner/>
      
    </div>
  )
}

export default CartPage
