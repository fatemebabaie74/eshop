import React from 'react'
import styles from './shoppingCart.module.css'
import ShoppingCartItem from '../components/shoppingcart/ShoppingCartItem'
import ShoppingcartTa from '../components/shoppingcart/ShoppingcartTa'

// import ShoppingcartTa from '../components/shoppingcart/ShoppingcartTa'


const shoppingCart = () => {
  return (
      <div>
      <ShoppingcartTa/>
      
      

        
      

        <div className={`${styles.outerContainer}`} >
   
      {/* <ShoppingCartItem/> */}
  

    </div>
     </div>
 
  )
}

export default shoppingCart
