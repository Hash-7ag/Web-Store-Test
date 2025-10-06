import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { setSelectedProduct, getAllProducts } from '../components/Products/productsSlice';

function ProductDetails() {
   const {id} = useParams();
   // console.log(id);
   const {products, selectedProduct} = useSelector((store)=>store.product);

   const dispatch = useDispatch();

   const {title, price, description, category, image, rating} = selectedProduct

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
    <div>
      Details of product - {title}
    </div>  
  )
}

export default ProductDetails
