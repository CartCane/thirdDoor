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
              <Specialization img={item.img} service={item.service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// import React from 'react'
// import Specialization from './Specialization'
// import {Swiper, SwiperSlide} from "swiper/modules"
// import { Autoplay } from "swiper/modules"
// import "swiper/css";

// export default function Content1() {
//   return (
//     <section className="comm-sec">
//         <div className="container">
//             <div>
//                 <div className="main-head ">
//                     <h1>Industry Specialisations</h1>        
//                 </div>
//                 <p className="sub-line">
//                     We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms.
//                     To provide clients with specialized search solutions, ABC has developed expertise in the following industries
//                 </p>
//             </div>
//             <div>
//                 <div>
//                     <div>
//                         <Specialization img="06/sp-icon-02.svg" service="Automobile & Auto Components" />
//                         <Specialization img="10/Finance.svg" service="Financial Service"/>
//                         <Specialization img="06/sp-icon-04.svg" service="Industrial" />
//                         <Specialization img="06/sp-icon-05.svg" service="Technology" />
//                         <Specialization img="10/Consumer.svg" service="Consumer" />
//                         <Specialization img="10/Media.svg" service="Media & Entertainment" />
//                         <Specialization img="10/Healthcare.svg" service="Pharma & Healthcare" />
//                         <Specialization img="10/Retail.svg" service="Retail" />
//                     </div>
//                     <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
//                 </div>
//             </div>
//             <div className="navigation">
//                 <div>
//                     <img src="https://www.abcconsultants.in/wp-content/themes/abc/assets/img/next-pre.svg" />
//                 </div>
//                 <div >
//                     <img src="https://www.abcconsultants.in/wp-content/themes/abc/assets/img/next-pre.svg" />
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }
