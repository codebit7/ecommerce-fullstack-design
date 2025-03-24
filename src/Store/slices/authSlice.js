import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';
const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    status: 'idle', 
    error: null,
  };

  
  export const loginRequest = createAsyncThunk('auth/login', 
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/login',
                 JSON.stringify(credentials),
                 {
                    headers:{
                        'Content-Type': 'application/json',
                    }
                 }  
            );

            return response.data;
            
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to login');
        }
    }
  )
const authSlice = createSlice({
     name:'auth',
     initialState,
     reducers:{
        logout:(state)=>{
           state.user = null;
           state.isAuthenticated = false;
           state.status='idle';
           state.error = null;
           state.token = null;
        }
     },
     extraReducers:(builder)=>{
         builder.addCase(loginRequest.pending,(state)=>{
            state.status = 'loading'
            state.error = null;

         })
         .addCase(loginRequest.fulfilled, (state,action)=>{
            state.isAuthenticated = true;
            state.status = 'success';
            state.user = action.payload.user
            state.token = action.payload.token
         })
         .addCase(loginRequest.rejected, (state,action)=>{
            state.status = 'failed'
            state.error =action.payload
         })
     }
     
    
})

export const {logout} = authSlice.actions
export default authSlice.reducer;