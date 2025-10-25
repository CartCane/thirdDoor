import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import styles from './modules/header.module.css'
import Login from './features/auth/component/Login'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.header}>
        <h1 className={styles.logo}>
            <Link className={styles.logoLink} to="/">.ThirdDoor</Link>
        </h1>
        <ul className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <span 
              className={styles.cross}
              onClick={()=>setIsOpen(!isOpen)}
            >
              &times;
            </span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-third-door">About Us</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Job</NavLink>
            <NavLink>Refer & Earn</NavLink>
            <NavLink>Partner With Us</NavLink>
            <NavLink to="/contact-us">Contact</NavLink>
        </ul>
        <h2 className={styles.phone}><a>+91-8088723265</a></h2>
        <Login />
        <button 
          className={styles.menuBtn}
          onClick={()=>setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" fill='white'>
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>
    </div>
  )
}
