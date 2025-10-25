import React from 'react';
import styles from './modules/Specialization.module.css';

export default function Specialization({ img, service }) {
  return (
    <div className={styles.wrapper}>
      <a href="#" className={styles.specializationBox}>
        <svg className={styles.progressCircle} viewBox="0 0 200 200">
          <circle r="90" cx="100" cy="100" className={styles.circle}></circle>
        </svg>
        <div className={styles.iconContainer}>
          <img
            src={`https://www.abcconsultants.in/wp-content/uploads/2023/${img}`}
            alt={service}
          />
        </div>
        <p className={styles.serviceText}>{service}</p>
      </a>
    </div>
  );
}
