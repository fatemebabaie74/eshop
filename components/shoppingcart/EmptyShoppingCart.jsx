import React from 'react'
import styles from './EmptyShoppingCart.module.css'
import Image from 'next/image'
const EmptyShoppingCart = () => {
  return (
    <div className={`${styles.outerContainer}`}>
   <div className={`${styles.mainContainer}`}>
    <Image className={`${styles.image}`} src={'/images/empty-cart.svg'} width={300} height={300}/>
    <h4 className={`${styles.hcontainer}`}>سبد خرید شما خالی است!</h4>
    <span className={`${styles.spancontainer}`}>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</span>
   </div>
    </div>
  )
}

export default EmptyShoppingCart
