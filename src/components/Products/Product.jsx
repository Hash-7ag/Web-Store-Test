import React from 'react'
import styles from './Product.module.css'
import clsx from 'clsx';
import { useNavigate } from 'react-router';

function Product({product}) {

   const {id, title, price, description, category, image, rating: {rate, count}} = product
   // console.log(`
   //    Product - Id:${id}
   //    ${title}
   //    ${price}
   //    ${description}
   //    ${category}
   //    ${image}
   //    ${rate}
   //    ${count}`
   // );

   const navigate = useNavigate();
  return (
    <div className={clsx(styles.product_card,"text-light font-main")}>
         <div>
            <img src={image} alt="" className={clsx(styles.product_img)}/>
            <p>{title}</p>
         </div>
         <h3>{price}$</h3>
         <button className='button' onClick={()=>navigate('/product-details/' + id)}>DETAILS</button>
    </div>
  )
}

export default Product
