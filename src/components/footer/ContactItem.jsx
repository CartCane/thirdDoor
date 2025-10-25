import styles from './ContactItem.module.css'

export default function ContactItem({icon, header, description}) {
  return (
    <div className={styles.container}>
      <a>{icon}</a>
      <div>
          <a className={styles.header}>
              {header}
          </a>
          <p className={styles.description}>
              {description}
          </p>
      </div>
    </div>
  )
}
