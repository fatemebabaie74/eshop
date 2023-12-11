import Image from 'next/image'
import React from 'react'
import styles from './NothingIncredibleOffers.module.css'

const NothingIncredibleOffers = () => {
  return (
    <div className={`${styles.counterContainer}`}>
      
      <div className={`${styles.mainContainer}`}>
      <Image src={'/images/empty-cart.svg'} width={200} height={200}/>
      <span>لیست خرید بعدی شما خالی است</span>
      </div>
    </div>
  )
}

export default NothingIncredibleOffers
