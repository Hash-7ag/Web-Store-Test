import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { setSelectedProduct, getAllProducts } from '../components/Products/productsSlice';
import { LuCirclePlus } from "react-icons/lu";
import { LuCircleMinus } from "react-icons/lu";
import { addToBasket } from '../components/Basket/basketSlice';

function ProductDetails() {
   const {id} = useParams();
   // console.log(id);
   const {products, selectedProduct} = useSelector((store)=>store.product);

   const dispatch = useDispatch();

   const {title, price, description, category, image, rating: { rate, count } = {}} = selectedProduct;

   const [value, setValue] =useState(0);

   const increment = ()=>{
      setValue((prev) => prev+1)
   }
   const decrement = ()=>{
      if(value <= 0){
         setValue(0);
      }
      else{
         setValue((prev) => prev-1);
      }
   }

   const addBasket = ()=>{
      const payload = {
         id,
         price,
         image,
         title,
         description,
         count: value
      }

      dispatch(addToBasket(payload));
   }

   console.log(selectedProduct);

   useEffect(()=>{
      if(products.length === 0){
         dispatch(getAllProducts());
      }
   }, []);

   useEffect(()=>{
      if(products.length > 0){
         const found = products.find((p)=> p.id == id);
         if (found){
            dispatch(setSelectedProduct(found));
         }
      }
   }, [products, id]);
  return (
    <div className='text-base font-main' style={{display: 'flex', justifyContent: 'center', alignItems: 'start', width: '100%', height: '100%', fontSize: '1.2rem'}}>
      <div style={{width: '50%', background: 'var(--color-primary-light)', padding: '20px 10xp', borderRadius: '15px', boxShadow: '2px 5px 15px #0000009e'}} className='flex-row'>
         <img src={image} width='350px' alt="" />
      </div>
      <div style={{
         width: '40%',
         // background: 'var(--color-primary-dark)', 
         padding: '20px', 
         borderRadius: '15px',
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'start',
         flexDirection: 'column'
         }}>

         <div style={{display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'row', width: '400px', gap: '140px'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', width: '250px', gap: '10px'}}>
               <span>{title}</span>
               <span style={{color: '#c5b232ff', fontWeight: 'bold',}}>Rate: {rate}</span>
               <span style={{color: '#c5b232ff', fontWeight: 'bold',}}>Count: {count}</span>
            </div>
            <div style={{fontSize: '1.5rem'}}>
               Price: <br />
               <span style={{color: '#c5b232ff', fontWeight: 'bolder', textShadow: '1px 1px 5px #00000043'}}>${price}</span>
            </div>
         </div>

         <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', marginTop: '20px'}}>

            <div style={{width: '100%', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px'}}>

               <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', fontSize: '1.8rem'}}>
                  <LuCircleMinus onClick={decrement} className='pointer' />
                  <span className='user-select-none'>{value}</span>
                  <LuCirclePlus onClick={increment} className='pointer' />
               </div>

               <button onClick={addBasket} className='button' style={{fontSize: '1.2rem'}}>Add To Basket</button>

            </div>
            <div className='user-select-none'>{description}</div>

         </div>
      </div>
    </div>  
  )
}

export default ProductDetails
