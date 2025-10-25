import { Link } from 'react-router-dom'
import styles from './QuickLink.module.css'

export default function QuickLink() {
  return (
    <div className={styles.quicklink}>
      <h4 className={styles.title}>Quick Link</h4>
      <ul className={styles.links}>
        <Link>Home</Link>
        <Link>About Us</Link>
        <Link>Services</Link>
        <Link>Job</Link>
        <Link>Refer & Earn</Link>
        <Link>Partner With Us</Link>
        <Link>Contact</Link>
      </ul>
    </div>
  )
}
