import styles from './Cards.module.css'

export default function Cards({head, description, image}) {
  const style={
    backgroundImage: `url(${image})`,
  }
  return (
    <div className={styles.container} style={style}>
      <h3>{head}</h3>
      <p>{description}</p>
    </div>
  )
}
