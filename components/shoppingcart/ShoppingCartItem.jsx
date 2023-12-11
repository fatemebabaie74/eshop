import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartSingleItem from './ShoppingCartSingleItem'
import DigiPlus from './DigiPlus'
 import LeftShoppingCart from '../LeftShoppingCart'

import styles from './ShoppingCartItem.module.css'
import EmptyShoppingCart from './EmptyShoppingCart'

const ShoppingCartItem = () => {
   const shoppingCart=  useSelector(state=>state.shoppingCart)
  
   if(shoppingCart.totalPrice===0){
    return <EmptyShoppingCart /> 
   }

  return (

    
      <div className={styles.outerContainer}>
     
<div className={`${styles.rightContainer}`}>
<div className={`${styles.digiPlus}`}>
           <DigiPlus /> 
         </div>
         <div className={`${styles.yourShoppingCart}`}>
             {
             shoppingCart.items.map((item)=>{
               return  <ShoppingCartSingleItem product={item}/>
            })
            }
         </div>
         <div className={`${styles.leftContainer}`}>
           <div className={`${styles.shoppingCartContainer}`}>
                <LeftShoppingCart />  
           </div>
          
      
        </div>
    </div>
  









    </div>
  )
}

export default ShoppingCartItem
