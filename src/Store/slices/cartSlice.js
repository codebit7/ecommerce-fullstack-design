import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL ="http://localhost:3000/api/v1";

export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async (cartData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.post(
        `${BASE_URL}/users/cart/add`,
        cartData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to add to cart");
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (productId, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.delete(
        `${BASE_URL}/users/cart/delete/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to delete cart item");
    }
  }
);


export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ productId, quantity }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.put(
        `${BASE_URL}/users/cart/update/${productId}`,
        { quantity },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to update cart item");
    }
  }
);


export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.get(`${BASE_URL}/users/cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cart items");
    }
  }
);


export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.post(
        `${BASE_URL}/users/cart/clear`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to clear cart");
    }
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder


      .addCase(addCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;

         state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteCartItem.fulfilled, (state, action) => {

        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })


      .addCase(getCartItems.fulfilled, (state, action) => {

        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total
  })

      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(clearCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [];
        state.total = 0;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
