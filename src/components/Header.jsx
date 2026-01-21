import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import styles from './modules/header.module.css'
import Services from './features/header/Services.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.mainLogo}>
        <MenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        <Logo />
      </div>
      <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} />
      <h2 className={styles.contact}><Link to="contact-us">Contact Us</Link></h2>
    </div>
  )
}

function MenuBtn({setIsOpen, isOpen}) {
  return (
    <button 
      className={styles.menuBtn} 
      onClick={()=>setIsOpen(!isOpen)}
    >
      {!isOpen && <svg width="24" height="24" fill='#0A2540'>
        <rect y="4" width="24" height="2" />
        <rect y="11" width="24" height="2" />
        <rect y="18" width="24" height="2" />
      </svg>}
    </button>
  )
}

function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link className={styles.logoLink} to="/">.ThirdDoor</Link>
    </h1>
  )
}

function MenuItems({isOpen, setIsOpen}) {
  const navContent = [{name: "Home", to: ""}, {name:"Careers", to:"careers"}, {name: "About-us", to: "about-third-door"}, {name: "Jobs", to: "jobs"}, {name: "Partner with us", to: "Partner-with-us"}]
  return(
    <ul className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <span 
          className={styles.cross}
          onClick={()=>setIsOpen(!isOpen)}
        >
          &times;
        </span>

        {navContent.map(item => 
          <li key={item.name}>
            <NavLink 
              key={item.name} 
              onClick={()=>setIsOpen(false)} 
              to={item.to}
            >
              {item.name}
            </NavLink>
          </li>)
        }
          <Services />
    </ul>
  )
}
