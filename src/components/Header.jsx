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
      <Link className={styles.logoLink} to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={`40`}>
          <path d="M128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L128 576C110.3 576 96 561.7 96 544C96 526.3 110.3 512 128 512L128 128zM416 352C433.7 352 448 337.7 448 320C448 302.3 433.7 288 416 288C398.3 288 384 302.3 384 320C384 337.7 398.3 352 416 352z"/>
        </svg>
        Third Door AI
      </Link>
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
