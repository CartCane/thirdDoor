import styles from './Cards.module.css'

export default function Cards({head, description, bg_image, image="", fsize, jContent="start"}) {
  const style={
    backgroundImage: `url(${bg_image})`,
    borderRadius: "",
    fontSize: fsize,
    justifyContent: jContent,
  }
  return (
    <div className={styles.container} style={style}>
      {image && <img src={image} alt='image'/>}
      <div className={styles.textContainer}>
        <h3>{head}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
