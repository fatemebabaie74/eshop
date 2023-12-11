import React from 'react'
import styles from './LeftShoppingCart.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import Image from 'next/image';
const LeftShoppingCart = () => {
    const shoppingCart = useSelector((state) => state.shoppingCart);
  return (



    <div className={`${styles.outerContainer}`}>
    <div className={`${styles.totalPrice}`}>
       <div className={`${styles.description}`}>
           قیمت کالاها  
        </div>
        <div className={`${styles.price}`}>{
        shoppingCart.totalPrice.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
        }
         <span>تومان</span>
        </div>
       </div>
       <div className={`${styles.totalPrice}`}>
           <div className={`${styles.description}`}>
           جمع سبد خرید
        </div>
        <div className={`${styles.price}`}>
         {
        shoppingCart.totalpaid.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
        }
         <span>تومان</span>
        </div>
       </div>
       <div className={`${styles.Buttoncontainer}`}>
         <Link href="#">
          <button className={`${styles.button}`} type='submit'>ثبت سفارش</button>
         </Link>   
       </div>
       <div className={`${styles.bottomContainer}`}>
         <div className={`${styles.bottom}`}>
          <div className={`${styles.right}`}>
           <Image src="/images/club-point.svg" width={16} height={16}/>
            <span> ۱۵۰ </span>
            <span className={`${styles.span}`}> امتیاز</span>
            <span className={`${styles.icon}`}><AiOutlineInfoCircle /></span>
         </div>
         <div className={`${styles.left}`}>
          <span>دیجی کلاب</span>
         
         
         </div>
         </div>
        
       </div>
   </div>
  )
}

export default LeftShoppingCart
