import { Link } from 'react-router-dom'
import styles from './QuickLink.module.css'

export default function QuickLink() {
  const navContent = [{name: "Home", to: "/"}, {name: "About-us", to: "/about-third-door"}, {name: "Services", to:"/"}, {name: "Job", to: "/"}, {name: "Partner with us", to: "/"}, {name: "Contact", to: "/contact-us"}]
  return (
    <div className={styles.quicklink}>
      <h4 className={styles.title}>Quick Link</h4>
      <ul className={styles.links}>
        {navContent.map(item => <Link to={item.to}>{item.name}</Link>)}
      </ul>
    </div>
  )
}
