import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: 1,
}

export const appSlice = createSlice({
   name:'app',
   initialState,
   reducers:{
      
   },
   extraReducers: (builder)=>{

   }
});

export const {  } = appSlice.actions

export default appSlice.reducer