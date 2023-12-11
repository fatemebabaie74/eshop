import Image from 'next/image';
import styles from './DigiPlus.module.css'
import { FaAngleLeft } from "react-icons/fa6";

  const DigiPlus = () => {

return(
  <div className={`${styles.outerContainer}`}>
    <div className={`${styles.rightContainer}`}>
  <div className={`${styles.rightItems}`}>
    <Image src={"/images/digiplus-purple.svg"} width={93} height={24}/>
  </div>
  <div className={`${styles.rightItems}`}>
  <p className={`${styles.text}`}>خدمات ویژه با اشتراک دیجی‌پلاس</p>
  </div>
  <div className={`${styles.rightItems}`}>
        <button className={`${styles.button}`} >
            دریافت این خدمات ویژه 
            <div className={`${styles.leftIcon}`}>
                <FaAngleLeft />
            </div>  
        </button>
    </div>
  </div>






  <div className={`${styles.leftContainer}`}>
      <div className={`${styles.leftItemsContainer}`}>
         <ul className={`${styles.leftList}`} >
          <li className={`${styles.leftListText}`}>ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه اشتراک)</li>
          <li className={`${styles.leftListText}`}>مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای بهداشتی)</li>
          <li className={`${styles.leftListText}`}>امکان ارسال فوری بعضی از کالاها ( رایگان )</li>
         </ul>
      </div>
       <div className={`${styles.leftImage}`}>
        <Image className={`${styles.leftimagee}`} src={"/images/digiplus-purple-pattern.svg"} width={200} height={150}/>
      </div>

     </div>  
    </div>



















)
  
};

export default DigiPlus
