import styles from './Founder.module.css';
import founder from '../../../assets/thirdDoorFounder.png';

export default function Founder() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Founder's Message</h1>
      <div className={styles.content}>
        <img src={founder} alt="Founder Image" className={styles.image} />
        <div className={styles.text}>
            <p>Welcome to Third Door! As the founder, I am thrilled to share our journey and vision with you. Our mission is to empower businesses to achieve sustainable growth through innovative solutions and strategic insights. We are committed to being a trusted partner that helps our clients navigate challenges and unlock their full potential in an ever-evolving marketplace.</p>
            <p>At Third Door, we believe in integrity, innovation, and impact. Our vision is to be a global leader in business growth solutions, recognized for our dedication to excellence and our positive contributions to the communities we serve. We are passionate about fostering long-term partnerships based on trust, transparency, and mutual success.</p>
            <p>Thank you for being part of our journey. Together, we can achieve great things and make a meaningful difference in the world of business.</p>
            <p>Sincerely,</p>
            <p>[S Santhosh]</p>
        </div>
      </div>
    </div>
  )
}
