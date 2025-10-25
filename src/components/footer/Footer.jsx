import FooterHead from "./FooterHead"
import FooterBottom from "./FooterBottom"
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <FooterHead />
      <FooterBottom />
    </div>
  )
}
