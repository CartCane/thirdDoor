import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import styles from './modules/header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navContent = [{name: "Home", to: ""}, {name: "About-us", to: "about-third-door"}, {name: "Services", to:"services"}, {name: "Job", to: "Job"}, {name: "Partner with us", to: "Partner-with-us"}, {name: "Contact", to: "contact-us"}]
  return (
    <div className={styles.header}>
      <div className={styles.mainLogo}>
        <button className={styles.menuBtn} onClick={()=>setIsOpen(!isOpen)}>
          {!isOpen && <svg width="24" height="24" fill='#0A2540'>
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>}
        </button>


        <h1 className={styles.logo}>
            <Link className={styles.logoLink} to="/">.ThirdDoor</Link>
        </h1>
      </div>

        <ul className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <span 
              className={styles.cross}
              onClick={()=>setIsOpen(!isOpen)}
            >
              &times;
            </span>
            {navContent.map(item => <NavLink onClick={()=>setIsOpen(false)} to={item.to}>{item.name}</NavLink>)}
        </ul>


        <h2 className={styles.contact}><Link to="contact-us">Contact Us</Link></h2>
    </div>
  )
}
