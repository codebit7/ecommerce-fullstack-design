import { configureStore } from "@reduxjs/toolkit"
import authReducer from './slices/authSlice.js'
import productReducer from './slices/productSlice.js'
import cartSlice from './slices/cartSlice.js'
import wishList from './slices/wishList.js'

export const  store  = configureStore(
    {
        reducer:{
            auth:authReducer,
            products:productReducer,
            cart:cartSlice,
            wishlist:wishList
        }
    }
)