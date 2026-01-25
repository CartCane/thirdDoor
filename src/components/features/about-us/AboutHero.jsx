import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <h1>Opening the Third Door to Smarter Growth</h1>
        </div>
        <div className={styles.content}>
            <img className={styles.image} src="/thirdDoor/about.jpg" alt="About Third Door"/>
            <p className={styles.text}>Third Door is a company dedicated to helping businesses grow smarter and more efficiently through innovative solutions and strategic partnerships. It helps businesses move forward with clarity and confidence. We bring together technology, strategy, and human insight to solve complex challenges, protect what matters, and build systems that scale with integrity.</p>
        </div>
    </div>
  )
}
