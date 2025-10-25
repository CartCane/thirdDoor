import React from 'react'
import styles from './modules/Button.module.css'

export default function Button({color, fs, bg, children}) {
    const customStyle = {
        color, backgroundColor: bg, fontSize: fs
    }
  return (
    <button className={styles.btn} style={customStyle}>
      {children}
    </button>
  )
}
