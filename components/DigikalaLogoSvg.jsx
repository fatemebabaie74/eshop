import Image from 'next/image'
import React from 'react'
import styles from './DigikalaLogoSvg.module.css'
import Link from 'next/link'
const DigikalaLogoSvg = () => {
  return (
    <Link href={"/"}>
    <div className={`${styles.outerContainer}`}>
    
      <Image className={`${styles.mainContainer}`}  src={`/images/logo.svg`} width={110} height={110}/>
   
    </div>
    </Link>
  )
}

export default DigikalaLogoSvg
