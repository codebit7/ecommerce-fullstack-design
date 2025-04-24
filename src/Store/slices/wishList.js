import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";
const user = JSON.parse(localStorage.getItem("user"));

export const getWishlistItem = createAsyncThunk(
  "wishlist/getItems",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = user.token || getState().auth.token;
      const res = await axios.get(`${BASE_URL}/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch wishlist items"
      );
    }
  }
);


export const addToWishlist = createAsyncThunk(
  "wishlist/addItem",
  async (item, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.post(
        `${BASE_URL}/wishlist`,
        { item },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add item to wishlist"
      );
    }
  }
);


export const removeToWishlist = createAsyncThunk(
  "wishlist/removeItem",
  async (item, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.post(
        `${BASE_URL}/wishlist/remove`,
        { item },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return item; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to remove item from wishlist"
      );
    }
  }
);


export const clearWishlist = createAsyncThunk(
  "wishlist/clear",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      await axios.post(
        `${BASE_URL}/wishlist/clear`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to clear wishlist"
      );
    }
  }
);

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getWishlistItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWishlistItem.fulfilled, (state, action) => {
        state.loading = false;
        state.wishList = action.payload;
      })
      .addCase(getWishlistItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(addToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishList.push(action.payload);
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    
      .addCase(removeToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishList = state.wishList.filter(
          (item) => item !== action.payload
        );
      })
      .addCase(removeToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(clearWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clearWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishList = action.payload;
      })
      .addCase(clearWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
