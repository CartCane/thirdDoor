import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import styles from './modules/header.module.css'
import Login from './features/auth/component/Login'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navContent = [{name: "Home", to: ""}, {name: "About-us", to: "about-third-door"}, {name: "Services", to:"services"}, {name: "Job", to: "Job"}, {name: "Partner with us", to: "Partner-with-us"}, {name: "Contact", to: "contact-us"}]
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
            {navContent.map(item => <NavLink onClick={()=>setIsOpen(false)} to={item.to}>{item.name}</NavLink>)}
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
