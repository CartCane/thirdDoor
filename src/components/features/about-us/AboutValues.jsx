import styles from './AboutValues.module.css';

export default function AboutValues() {
  return (
    <div className={styles.values}>
        <div className={styles.valuesHeader}>
            <h2>Our Values</h2>
            <button className={styles.careersButton}>View Careers</button>
        </div>
        <div className={styles.valueList}>
            <div className={styles.valueItem}>
            <h3>Connection</h3>
            <p>Building meaningful relationships with clients, partners, and team members to foster trust and collaboration.</p>
            </div>
            <div className={styles.valueItem}>
            <h3>Congruence</h3>
            <p>Ensuring alignment between our actions, values, and outcomes to create a cohesive and authentic experience for all stakeholders.</p>
            </div>
            <div className={styles.valueItem}>
            <h3>Commitment</h3>
            <p>Dedicated to delivering exceptional results and continuously improving to meet the evolving needs of our clients and the market.</p>
            </div>
        </div>
    </div>
  )
}
