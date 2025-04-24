import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "http://localhost:3000/api/v1";



export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ page = 1, limit = 10 }, {getState, rejectWithValue }) => {
    console.log("function called");
    
    try {
      const token = getState().auth.token;
      const response = await axios.get(`${BASE_URL}/products?page=${page}&limit=${limit}`,
         { headers: { Authorization: `Bearer ${token}` } });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch products");
    }
  }
);


export const createProduct = createAsyncThunk('products/createProduct',
  async (product, { getState,rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.post(`${BASE_URL}/create`,
        product, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
       } catch (error) {
          return rejectWithValue(error.response?.data?.message || "Failed to create product");
     }
   }
      
)




export const updateProduct = createAsyncThunk('products/updateProduct',
  async ({id , product}, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.post(`${BASE_URL}/update/${id}`,
        product, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
       } catch (error) {
          return rejectWithValue(error.response?.data?.message || "Failed to create product");
     }
   }
      
)


export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (_, { getState,rejectWithValue }) => {
    try {

      const token = getState().auth.token;
      const response = await axios.get('http://localhost:3000/api/v1/category',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            },
            }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch product");
    }
  }
);



const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories:[],
    product: null,
    loading: false,
    error: null,
    totalPage: 1,
    totalProducts: 0,
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = Array.isArray(action.payload.data) ? action.payload.data : [];
        state.totalPage = action.payload.totalPage;
        state.totalProducts = action.payload.totalProducts;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
  },
});

export const { updateFilter } = productSlice.actions;
export default productSlice.reducer;
