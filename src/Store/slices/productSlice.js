import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchProducts = createAsyncThunk('products/fetchProducts', 
    async (_,{ rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/users/product');
            return response.data;
            
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
        }
    }
  )


const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchProducts.pending , (state)=>{
                state.loading  = true;
                state.error = false;
            })
            .addCase(fetchProducts.fulfilled , (state, action ) =>{
                state.products = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(fetchProducts.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
            })
        }
})


export default productSlice.reducer;