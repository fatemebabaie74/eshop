import React from 'react'
import styles from './IncredibleSuperMarket.module.css'
import Image from 'next/image'

 
const IncredibleSuperMarket = ({product}) => {
 
  return (
    <div className={styles.outerContainer}>
      
     <div  className={styles.rightContainer}>
      <div className={styles.subrightContainer}>
     <Image src={'/images/fresh.png'} width={70} height={70}/>
      {/* <div className={styles.incredibleContainer}> */}
      <span className={styles.spanContainer}>شگفت انگیز سوپرمارکتی</span> 
      {/* <Image className={styles.img} src={'/images/fresh.svg'} width={100} height={100}/> */}
      </div>
      <div className={styles.saleContainer}>
        <button className={styles.btnContainer}>تا ۳۲٪ تخفیف</button>
      </div>
      </div>
      
     
     
   

    
      <div className={styles.midContainer} >
        
            
                    
                     <div className={`${styles.itemContainer}`}>
                      <Image className={`${styles.imageContainer}`} src={`/images/panir.png`} width={70} height={70}/>
                      
                      <Image className={`${styles.imageContainer}`} src={`/images/khamirdandun.png`} width={70} height={70} />
                      <Image className={`${styles.imageContainer}`}  src={`/images/damestos.png`} width={70} height={70} />
                      <Image className={`${styles.imageContainer}`} src={`/images/sos.png`} width={70} height={70} />

                    
                      
                     </div> 
                 
             <div className={`${styles.buttonContainer}`}>
              <button className={`${styles.buttondetailContainer}`}>بیش از ۱۰۰ کالا </button>
              
             </div>
              
              </div>
               
     <div className={styles.leftContainer}>
       <image src={"/images/fresh.png"} width={60} height={60}/> 
     </div>
   </div>
   );
};

export default IncredibleSuperMarket
    