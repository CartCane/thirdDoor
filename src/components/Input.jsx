import {useState} from 'react'
import styles from './modules/Input.module.css'

export default function Input({message, placeholder}) {
    const [select, setSelect] = useState(false)
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} onClick={()=>setSelect(true)} placeholder={placeholder}/>
      {select && <p>{message}</p>}
    </div>
  )
}
