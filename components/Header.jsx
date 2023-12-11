import React from "react";
import TopBanner from "./TopBanner";
import SearchBox from "./SearchBox";
import TwoLayerMenu from "./twolayermenu/TwoLayerMenu";
import DigikalaLogoSvg from "./DigikalaLogoSvg";
 import User from "./User";
import ShoppingCartSvg from "./shoppingcart/ShoppingCartSvg";
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={`${styles.outercontainer}`}>
      <TopBanner className={`${styles.TopBanner}`}/>
     <div className={`${styles.maincontainer}`}>
    <div className={`${styles.rightcontainer}`}>
    
      <DigikalaLogoSvg className={`${styles.logocontainer}`}/>
      <SearchBox className={`${styles.searchcontainer}`} />
      <div className={`${styles.leftcontainer}`}>
         <ShoppingCartSvg className={`${styles.ShoppingCartSvg}`}/>
            <User className={`${styles.usercontainer}`}/>
     
     
      </div>
    
    </div>
    
     </div>
     <TwoLayerMenu className={`${styles.TwoLayerMenu}`}/>
    </div>
  );
};

export default Header;
