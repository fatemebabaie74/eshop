import React from 'react'
import styles from './DownloadDigikala.module.css'
import Image from 'next/image'

const DownloadDigikala = () => {
  return (
    <div className={`${styles.outercontainer}`}>
      <div className={`${styles.maincontainer}`}>
        <Image className={`${styles.imagecontainer}`} src={`/images/footerlogo2.png`} width={50} height={50}/>
       <div className={`${styles.divcontainer}`}>  دانلود اپلیکیشن دیجی‌کالا</div>
      </div>
      <div className={`${styles.leftcontainer}`}>
      <Image className={`${styles.leftimagescontainer}`} width={70} height={70} src={'/images/coffe-bazzar.svg'}/>
      <Image className={`${styles.leftimagescontainer}`}  width={70} height={70} src={'/images/myketButton.svg'}/>
      <Image className={`${styles.leftimagescontainer}`} width={70} height={70} src={'/images/sibAppButton.svg'}/>
    <Image className={`${styles.leftimagespetioalscontainer}`} width={70} height={70} src={'/images/More.svg'}/>
   
   
   
      </div>
    </div>
  )
}

export default DownloadDigikala
