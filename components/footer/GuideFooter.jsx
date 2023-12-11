import React from 'react'
import styles from './GuideFooter.module.css'
import { SlSocialInstagram } from "react-icons/sl";
import { SiTwitter } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import Link from 'next/link';
const GuideFooter = () => {
  return (
    <div className={`${styles.outercontainer}`}>
      <div className={`${styles.maincontainer}`}>
    <ul className={`${styles.ulcontainer}`}>
        <li className={`${styles.lidigicontainer}`}>
        با دیجی‌کالا
        </li>
        <li className={`${styles.licontainer}`}>
        اتاق خبر دیجی‌کالا
</li>
<li className={`${styles.licontainer}`}>
فروش در دیجی‌کالا
</li>
<li className={`${styles.licontainer}`}>
فرصت‌های شغلی
</li>
<li className={`${styles.licontainer}`}>
گزارش تخلف در دیجی‌کالا
</li>
<li className={`${styles.licontainer}`}>
تماس با دیجی‌کالا
</li>
<li className={`${styles.licontainer}`}>
درباره دیجی‌کالا

</li>
    </ul>
      </div>
      <div className={`${styles.midcontainer}`}>
        <ul className={`${styles.ulmidcontainer}`}>
            <li className={`${styles.limidclientcontainer}`}>
خدمات مشتریان
            </li>
            <li className={`${styles.limidcontainer}`}>
            پاسخ به پرسش‌های متداول
            </li>
            <li className={`${styles.limidcontainer}`}>
            رویه‌های بازگرداندن کالا
            </li>
            <li className={`${styles.limidcontainer}`}>
            شرایط استفاده
            </li>
            <li className={`${styles.limidcontainer}`}>
            حریم خصوصی
            </li>
            <li className={`${styles.limidcontainer}`}>
            گزارش باگ
            </li>
        </ul>
      </div>
      <div className={`${styles.midtwocontainer}`}>
        <ul className={`${styles.midtwoulcontainer}`}>
            <li className={`${styles.midtwoliicontainer}`}>راهنمای خرید از دیجی‌کالا
</li> 
    
 <li className={`${styles.midtwolicontainer}`}>
 نحوه ثبت سفارش
</li> 
<li className={`${styles.midtwolicontainer}`}>
رویه ارسال سفارش
            </li>
            <li className={`${styles.midtwolicontainer}`}>
            شیوه‌های پرداخت
            </li>
        </ul>
      </div>
      <div className={`${styles.leftcontainer}`} >
        <ul className={`${styles.leftulcontainer}`}>
            <li className={`${styles.leftlicontainer}`}>
همراه ما باشید!
            </li>
        </ul>
        <Link href={"/"}>
        <div className={`${styles.svgcontainer}`} >
        <SlSocialInstagram className={`${styles.svgleftcontainer}`} />
        <SiTwitter className={`${styles.svgleftcontainer}`} />
        <FaLinkedin className={`${styles.svgleftcontainer}`} />
        <SiAparat className={`${styles.svgleftcontainer}`} />
        </div>
        </Link>
      </div>
      <div className={`${styles.emailcontainer}`}>
        
            <span className={`${styles.emailspancontainer}`}>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</span>

        <input type="email" placeholder='ایمیل شما'  className={`${styles.inputcontainer}`} />
        <button className={`${styles.buttoncontainer}`}>ثبت</button>
      </div>
    </div>
  )
}

export default GuideFooter
