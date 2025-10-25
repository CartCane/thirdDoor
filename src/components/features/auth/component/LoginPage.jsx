import React from 'react'
import styles from './LoginPage.module.css'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <header className={styles.header}>
        <Link className={styles.arrow} to="/">&larr;</Link>
        <p>Login</p>
      </header>
      <div className={styles.headline}><h3>Time to Kickstart your Career!</h3></div>
      <div className={styles.form}>
        <h2>Enter Your Phone Number</h2>
        <p>You will receive OTP via SMS & Whatsapp</p>
        <input type='number'/>
        <button className={styles.btn}>Get OTP</button>
      </div>
      <p className={styles.footer}>By signing in you agree to our <span>terms of service</span> and <span>privacy policy</span></p>
    </div>
  )
}
