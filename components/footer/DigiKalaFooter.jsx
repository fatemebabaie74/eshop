import React from 'react'
import styles from './DigiKalaFooter.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowUp } from "react-icons/io";
const DigiKalaFooter = () => {
  return (
    <div className={`${styles.outerContainer}`}>

          <Link href={"/"}>
    <div className={`${styles.divvContainer}`}>
   
      <Image className={`${styles.mainContainer}`}  src={`/images/logoFarsi.svg`} width={100} height={100}/>
    
    </div>
    </Link>
    <div className={`${styles.phoneContainer}`} >
        <p className={`${styles.spanContainer}`}>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ -  ۰۲۱
     |  
</p>
<p className={`${styles.spanContainer}`}>
۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>

    </div >
 
   <div className={`${styles.divContainer}`}>
   <button className={`${styles.buttonContainer}`}>
 {/* <div className={`${styles.divsvgContainer}`}>  */}
<p className={`${styles.pContainer}`}>بازگشت به بالا </p>
<IoIosArrowUp className={`${styles.svgContainer}`}  />
{/* </div> */}
</button>
   </div> 
    </div>

    
  )
}

export default DigiKalaFooter
