import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import productReducer from '../components/Products/productsSlice'

export const store = configureStore({
   reducer: {
      app: appReducer,
      product: productReducer
   },
}) 