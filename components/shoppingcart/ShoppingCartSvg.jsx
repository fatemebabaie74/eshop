import Link from 'next/link';
import React from 'react'
import styles from './ShoppingCartSvg.module.css'
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';
const ShoppingCartSvg = () => {
  const shoppingCart = useSelector((state)=>state.shoppingCart);
  return (
  
   
        <div className={`${styles.outercontainer}`}>
           <Link href={"/shoppingCart"}>
        <BsCart  className={styles.svgContainer} />
      <div className={`${styles.maincontainer}`}>
{shoppingCart.totalCount}
      </div>
   </Link>
    </div>
    
 
  )
}

export default ShoppingCartSvg
