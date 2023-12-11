import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShoppingCartItem from './ShoppingCartItem';
import AnyShop from './AnyShop';
import styles from './ShoppingcartTa.module.css'

const ShoppingcartTa = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <Tabs>
    <TabList>
      <Tab>سبد خرید</Tab>
      <Tab>خرید بعدی</Tab>
    </TabList>

    <TabPanel>
        
       <ShoppingCartItem/> 
      
    </TabPanel>


  <TabPanel>
    <AnyShop/>
  </TabPanel>
  </Tabs>

    </div>
  )
}

export default ShoppingcartTa
