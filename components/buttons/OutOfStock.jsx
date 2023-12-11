import React from 'react'
import styles from './OutOfStock.module.css'
const OutOfStock = () => {
  return (
    <div className={`${styles.outerContainer}`}>
      <button className={`${styles.button}`} >
        <span className={`${styles.span}`}>ناموجود</span>
      </button>
    </div>
  )
}

export default OutOfStock
