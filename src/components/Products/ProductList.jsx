import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './productsSlice';
import Product from './Product';

function ProductList() {
   const dispach = useDispatch();
   const {products} = useSelector((store)=> store.product);
   // console.log(products)

   useEffect(()=>{
      dispach(getAllProducts())
   }, []);

   return (
      <div style={{marginTop: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap',}}>
         {
            products && products.map((product)=>(
               <Product key={product.id} product={product}/>
            ))
         }
      </div>
   )
}

export default ProductList
