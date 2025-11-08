import React from 'react';
import styles from './modules/Specialization.module.css';

export default function Specialization({pic, service }) {
  return (
    <div className={styles.wrapper}>
      <div href="#" className={styles.specializationBox}>
        <figure className={styles.iconContainer}>
          <img src={`https://www.abcconsultants.in/wp-content/uploads/2023/${pic}`} alt={service} />
        </figure>
        <p>{service}</p>
      </div>
    </div>
  );
}
