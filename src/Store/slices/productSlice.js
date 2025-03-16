import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchProducts = createAsyncThunk('products/fetchProducts', 
    async ({ page = 1, limit = 10 },{ rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/users/products?page=${page}&limit=${limit}`);
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
        totalPage:1,
        totalProducts:0
        },
        reducers: {
           
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchProducts.pending , (state)=>{
                state.loading  = true;
                state.error = false;
            })
            .addCase(fetchProducts.fulfilled , (state, action ) =>{
                state.products = action.payload.data;
                state.totalPage = action.payload.totalPage;
                state.totalProducts = action.payload.totalProducts;
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