import React from 'react'
import Description from './Description'
import ContactInfo from './ContactInfo'
import QuickLink from './QuickLink'
import styles from './FooterHead.module.css'

export default function FooterHead() {
  return (
    <div className={styles.footerHead}>
      <Description />
      <ContactInfo />
      <QuickLink />
    </div>
  )
}
