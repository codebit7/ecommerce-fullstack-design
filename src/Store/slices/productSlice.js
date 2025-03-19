import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page = 1, limit = 10 }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;  


      // if (!token) {
      //   return rejectWithValue("No authentication token found");
      // }

      const response = await axios.get(
        `http://localhost:3000/api/v1/products?page=${page}&limit=${limit}`,
        {
          headers: {
            'Content-Type': 'application/json',
            
          }
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
    }
  }
);



const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
        totalPage:1,
        totalProducts:0,
        filters: {
          category: "All",
          priceRange: [0, 7000],
          rating: 0,
          search: "",
          condition: "Any",
          brands: [],
          featured: "Featured",
        },

        },
        reducers: {
          updateFilter:(state, action)=>{
            state.filters[action.payload.key] = action.payload.value;
          }
           
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

export const { updateFilter } = productSlice.actions;
export default productSlice.reducer;