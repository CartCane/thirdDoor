import styles from './modules/Content2.module.css'

export default function WhyThirdDoor() {
  return (
    <section className={styles.section}>
      <div
        className={styles.textContainer}
      >
        <h2 className={styles.heading}>
          Why ThirdDoor?
        </h2>
        <p className={styles.description}>
          We started ThirdDoor to bridge the gap between fresh talent and real
          opportunities. In a world where most doors stay closed to freshers, 
          droppers, late-starters, career-restarters, etc. We open the third 
          one — where skills speak louder than background.  
          Our mission is simple: connect job seekers and recruiters without
          barriers or bias.
        </p>
        <button className={styles.button}>Learn More</button>
      </div>

      <div className={styles.qContainer}>
        <p className={styles.subtext}>
          “We believe skills should be the only qualification that matters. At ThirdDoor, we are creating a world where anyone — from any background — can step into a new career with confidence.”
        </p>
      </div>
    </section>
  );
}
