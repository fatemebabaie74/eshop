import React from 'react'
 import ReactLogo from 'react-icons'
import styles from './TwoLayerMenu.module.css'
const TwoLayerMenu = () => {
  return (
    <div className={`${styles.outerContainer}`}>
     <nav className={`${styles.mainContainer}`}>

        <ul className={`${styles.menuContainer}`}>
            
            <li className={`${styles.subContainer}`}> 
             <a href="#"> دسته‌بندی کالاها</a> 
             <div className={`${styles.submenu}`}>
                <ul className={`${styles.twosubmenu}`}>
                    <li className={`${styles.twomainsubmenu}`}>
                        <a className={`${styles.detailsubmenu}`} href="">موبایل</a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                       <a className={`${styles.detailsubmenu}`} href=""> کالای دیجیتال</a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                <a className={`${styles.detailsubmenu}`} href="">خانه و آشپزخانه</a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                    <a className={`${styles.detailsubmenu}`} href="">مد و پوشاک</a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                        
                        <a className={`${styles.detailsubmenu}`} href="">کالاهای سوپرمارکتی</a>
                    </li> 
                    
                    <li className={`${styles.twomainsubmenu}`}>
                        <a className={`${styles.detailsubmenu}`} href=""> کتاب، لوازم تحریر و هنر </a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                        <a className={`${styles.detailsubmenu}`} href="">اسباب بازی، کودک و نوزاد</a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                        <a className={`${styles.detailsubmenu}`} href=""> زیبایی و سلامت </a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                        <a href=""> ورزش و سفر</a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                        <a className={`${styles.detailsubmenu}`} href=""> ابزار آلات و تجهیزات</a>
                    </li>
                    <li className={`${styles.twomainsubmenu}`}>
                        <a className={`${styles.detailsubmenu}`} href=""> خودرو و موتورسیکلت</a>
                    </li>
                  
                    <li className={`${styles.twomainsubmenu}`}>
                        <a className={`${styles.detailsubmenu}`} href="">محصولات بومی و محلی</a>
                    </li>
                  
                </ul>
             </div>
             </li>

            <li className={`${styles.subContainer}`} >
                <a href="#">شگفت انگیزها</a>
            </li>
            <li className={`${styles.subContainer}`}> 
            <a href="#">سوپرمارکت</a>
            </li>
            <li className={`${styles.subContainer}`}>
            <a href="#">کارت هدیه</a>
            </li>
            <li className={`${styles.subContainer}`}>
            <a href="#"> پرفروش ترین ها</a>  
            </li>
            <li className={`${styles.subContainer}`}> 
            <a href="#"> تخفیف‌ها و پیشنهادها</a>   
            </li>
            <li className={`${styles.subContainer}`}> 
            <a href="#"> سوالی دارید؟ </a>  
            </li>
            <li className={`${styles.subContainer}`}> 
            <a href="#"> در دیجی‌کالا بفروشید! </a>  
            </li>
        </ul>
     </nav>
    </div>
  )
}

export default TwoLayerMenu
