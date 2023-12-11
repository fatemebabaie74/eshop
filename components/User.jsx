import React from 'react'
import styles from './User.module.css'
import Link from 'next/link'
import { BsBoxArrowInLeft } from 'react-icons/bs'
const User = () => {
  return (
    
       <div className={`${styles.outerContainer}`}>
          <Link href="/SignUp/" className={`${styles.link}`}>
            <div className={`${styles.divContainer}`}>
              <div className={`${styles.svgContainer}`}>
                <BsBoxArrowInLeft />
              </div>
              <div className={`${styles.divvContainer}`}>
              ورود | ثبت نام
            </div>
            </div>
          </Link>
    </div>
  )
}

export default User
