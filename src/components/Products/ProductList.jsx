import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './productsSlice';

function ProductList() {
   const dispach = useDispatch();
   const {products} = useSelector((store)=> store.product);
   console.log(products)

   useEffect(()=>{
      dispach(getAllProducts())
   }, []);

   return (
      <div>

      </div>
   )
}

export default ProductList
