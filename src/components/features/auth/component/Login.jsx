import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div>
      <Link className={styles.login} to="login">Login</Link>
    </div>
  )
}
