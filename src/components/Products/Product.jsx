import React from 'react'
import styles from './Product.module.css'
import clsx from 'clsx';

function Product({product}) {

   const {id, title, price, description, category, image, rating: {rate, count}} = product
   console.log(`
      Product - ${id}
      ${title}
      ${price}
      ${description}
      ${category}
      ${image}
      ${rate}
      ${count}`
   );
  return (
    <div className={clsx(styles.product_card,"text-light font-main")}>
         <div>
            <img src={image} alt="" className={clsx(styles.product_img)}/>
            <p>{title}</p>
         </div>
         <h3>{price}$</h3>
         <button>DETAILS</button>
    </div>
  )
}

export default Product
