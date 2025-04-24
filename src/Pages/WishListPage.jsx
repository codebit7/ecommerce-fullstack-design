import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistItem } from '../Store/slices/wishList';
import ProductGrid from '../components/ProductGrid/ProductGrid';

const WishListPage = () => {

     const { wishlist } = useSelector((state) => state.wishlist);
    
     const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWishlistItem())
    }
    , [dispatch])
  return (
    <div>
        <h1>Your favorites</h1>
        {
            Array.isArray(wishlist) && wishlist.length > 0 ? <ProductGrid products ={wishlist}/>:
            <p>No items in your wishlist</p>
        }
      
    </div>
  )
}

export default WishListPage
