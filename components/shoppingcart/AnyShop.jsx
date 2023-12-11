import Image from 'next/image'
import React from 'react'
import styles from './AnyShop.module.css'
const AnyShop = () => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.mainContainer}`}>
        <Image className={`${styles.image}`} src={'/images/empty-cart.svg'} width={200} height={200}/>
        <p className={`${styles.p}`}>لیست خرید بعدی شما خالی است!</p>
        <span className={`${styles.span}`}>شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.</span>
      </div>
    </div>
  )
}

export default AnyShop
