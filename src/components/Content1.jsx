import React from "react";
import Specialization from "./Specialization";
import styles from "./modules/SpecializationSlider.module.css";

export default function SpecializationSlider() {
  const slides = [
    { img: "06/sp-icon-02.svg", service: "Automobile & Auto Components" },
    { img: "10/Finance.svg", service: "Financial Services" },
    { img: "06/sp-icon-04.svg", service: "Industrial" },
    { img: "06/sp-icon-05.svg", service: "Technology" },
    { img: "10/Consumer.svg", service: "Consumer" },
    { img: "10/Media.svg", service: "Media & Entertainment" },
    { img: "10/Healthcare.svg", service: "Pharma & Healthcare" },
    { img: "10/Retail.svg", service: "Retail" },
  ];

  // Duplicate slides for infinite scroll illusion
  const loopSlides = [...slides, ...slides];

  return (
    <section className={styles.sliderSection}>
      <div className={styles.heading}>
        <h1>Industry Specialisations</h1>
        <p>
          We recognize that each industry has its own nuances in terms of
          management style, hiring practices, and compensation norms.
        </p>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          {loopSlides.map((item, i) => (
            <div className={styles.slide} key={i}>
              <Specialization pic={item.img} service={item.service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}