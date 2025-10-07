import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import productReducer from '../components/Products/productsSlice'
import basketReducer from '../components/Basket/basketSlice'

export const store = configureStore({
   reducer: {
      app: appReducer,
      product: productReducer,
      basket: basketReducer,
   },
}) 