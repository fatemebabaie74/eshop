import React from 'react'
import styles from './ShoppingCartSingleItem.module.css'
import Image from 'next/image'
import ShoppingCartItemCounter from '../buttons/ShoppingCartItemCounter'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { CiShop } from "react-icons/ci";
import { TbShoppingCartCopy } from "react-icons/tb";
import { TfiTruck } from "react-icons/tfi";
import { CiTimer } from "react-icons/ci";
import { IoIosRadioButtonOn } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { AiOutlineMore } from "react-icons/ai";

const ShoppingCartSingleItem = ({product}) => {
  const shoppingCartItems = useSelector((state)=>state.shoppingCart.items);

    
       
       

     
    {/* </div> */}
  // )
  return (
    <div className={`${styles.outerContainer}`}>
    
     {/* <div className={`${styles.detailsContainer}`}> */}
     <div className={`${styles.rightContainer}`}>
        <div className={`${styles.product}`}>
          <Image src={product.indexImageUrl} width={150} height={150}/>
        </div>
         <div className={`${styles.counterContainer}`}>
            <ShoppingCartItemCounter
            
            productId={product.id}/>
          </div>
          <div className={`${styles.Price}`}>
       {
        product.priceWithDiscount === 0 
        ?`${product.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان `
         :`${product.priceWithDiscount
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان `
        }
        </div>
     {/* </div>   */}
        <div className={`${styles.leftContainerr}`}>
        <div className={`${styles.leftContainer}`}>
        <h3 className={`${styles.productName}`}>{product.name}</h3>
        
        <div className={styles.leftbottomContainer}>
            <ul className={styles.ulContainer}>
                <li className={styles.liContainer}>
                مشکی
                </li>
                <li className={styles.liContainer}>
                گارانتی 18 ماهه آوین پایدار ایرانیان
                </li>
                <li className={styles.liContainer}>
                دیجی‌کالا
                </li>
                <li className={styles.liContainer}>
                موجود در انبار دیجی‌کالا

                </li>
                <li className={styles.liContainer}>
                ارسال دیجی‌کالا


                </li>
                <li className={styles.liContainer}>
                ارسال امروز (فعلا در شهر تهران و کرج)


                </li>
            </ul>
        </div>
        </div>
        </div> 
         </div>
      
    
        
     
   
    </div>
  )
}

export default ShoppingCartSingleItem
