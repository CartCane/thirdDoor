import { Link } from 'react-router-dom'
import styles from './QuickLink.module.css'

export default function QuickLink() {
  const navContent = [{name: "Home", to: "/"}, {name: "About-us", to: "/about-third-door"}, {name: "Careers", to: "/careers"}, {name: "Job", to: "/jobs"}, {name: "Partner with us", to: "/Partner-with-us"}, {name: "Contact", to: "/contact-us"}, {name: "Post Your CV", to: "/post-your-cv"}];
  return (
    <div className={styles.quicklink}>
      <h4 className={styles.title}>Quick Link</h4>
      <ul className={styles.links}>
        {navContent.map(item => <Link key={item.name} to={item.to}>{item.name}</Link>)}
      </ul>
    </div>
  )
}
