import React from 'react'
import styles from './Description.module.css'

export default function Description() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THIRD DOOR AI</h1>

      <p className={styles.description}>
        Welcome to Third Door, your trusted partner in the world of recruitment and hiring.
        We are dedicated to connecting talent with opportunity, ensuring the right fit
        for both employers and job seekers.
      </p>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9733521266087!2d77.62947872963173!3d12.978668892525532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bd050e3293%3A0xd80fd606f67a4cae!2sBHIVE%20Platinum%20Address%20Maker%2C%20Indiranagar!5e0!3m2!1sen!2sin!4v1770209266162!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Third Door Location"
        />
      </div>
    </div>
  )
}
