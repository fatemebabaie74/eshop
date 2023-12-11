import React from 'react'
import styles from './LoginSignUpErrorMessage.module.css'
const LoginSignUpErrorMessage = (props) => {
  return (
    <div className={`${styles.outerContainer}`}>
        <p className={`${styles.message}`}>{props.children}</p>
    </div>
  )
}

export default LoginSignUpErrorMessage
