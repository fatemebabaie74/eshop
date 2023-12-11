import Image from 'next/image'
import React from 'react'
import styles from './FooterAx.module.css'
const FooterAx = () => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.mainContainer}`}>
       
       <Image className={`${styles.imageContainer}`} src={`/images/cashOnDelivery.svg`} width={70}height={70}/>
       <span className={`${styles.spanContainer}`}>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
       </div>
       <div className={`${styles.mainContainer}`}>
       
       <Image className={`${styles.imageContainer}`} src={`/images/expressDelivery.svg`} width={70}height={70}/>
       <span className={`${styles.spanContainer}`}>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
       </div>
       <div className={`${styles.mainContainer}`}>
       
       <Image className={`${styles.imageContainer}`} src={`/images/cashOnDelivery.svg`} width={70}height={70}/>
       <span className={`${styles.spanContainer}`}>امکان پرداخت در محل</span>
       </div>
       <div className={`${styles.mainContainer}`}>
       
       <Image className={`${styles.imageContainer}`} src={`/images/support.svg`} width={70}height={70}/>
       <span className={`${styles.spanContainer}`}> ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</span>
       </div>
       <div className={`${styles.mainContainer}`}>
       
       <Image className={`${styles.imageContainer}`} src={`/images/daysReturn.svg`} width={70}height={70}/>
       <span className={`${styles.spanContainer}`}>  هفت روز ضمانت بازگشت کالا</span>
       </div>
       <div className={`${styles.mainContainer}`}>
       
       <Image className={`${styles.imageContainer}`} src={`/images/originalProducts.svg`} width={70}height={70}/>
       <span className={`${styles.spanContainer}`}>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</span>
       </div>
      </div>
    
  )
}

export default FooterAx
