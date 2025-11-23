import React from 'react'
import styles from './modules/Button.module.css'

export default function Button({color, fs, bg, fw, fm, children}) {
    const customStyle = {
        color, backgroundColor: bg, fontSize: fs, fontFamily: fm, fontWeight: fw
    }
  return (
    <button className={styles.btn} style={customStyle}>
      {children}
    </button>
  )
}
