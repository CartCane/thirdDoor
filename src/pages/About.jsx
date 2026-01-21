import styles from '../components/modules/About-us.module.css';

export default function About() {
  return (
    <div>
      <div className={styles.title}>
        <h1>About Third Door</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="/thirdDoor/about.jpg" alt="About Third Door"/>
        </div>
        <div className={styles.text}>
          <h1>Opening the Third Door to Smarter Growth</h1>
          <p>Third Door is a company dedicated to helping businesses grow smarter and more efficiently through innovative solutions and strategic partnerships. It helps businesses move forward with clarity and confidence. We bring together technology, strategy, and human insight to solve complex challenges, protect what matters, and build systems that scale with integrity.</p>
        </div>
      </div>
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
      <div className={styles.policies}>
        <div>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionText}>At Third Door, our mission is to empower businesses to achieve sustainable growth through innovative solutions, strategic insights, and unwavering commitment. We strive to be the trusted partner that helps our clients navigate challenges, seize opportunities, and unlock their full potential in an ever-evolving marketplace.</p>
        </div>
        <div>
          <h2 className={styles.visionTitle}>Our Vision</h2>
          <p className={styles.visionText}>To be a global leader in business growth solutions, recognized for our integrity, innovation, and impact. We envision a future where every business, regardless of size or industry, has access to the tools and expertise needed to thrive and make a positive difference in the world.</p>
        </div>
        <div>
          <h2 className={styles.goalTitle}>Our Goal</h2>
          <p className={styles.goalText}>Our goal is to consistently deliver measurable value to our clients by helping them achieve their growth objectives. We aim to build long-term partnerships based on trust, transparency, and mutual success, while continuously evolving our services to meet the dynamic needs of the business landscape.</p>
        </div>
        <div>
          <h2 className={styles.qualityTitle}>Our Quality Policy</h2>
          <p className={styles.qualityText}>At Third Door, we are committed to maintaining the highest standards of quality in all aspects of our business. We strive to exceed client expectations through continuous improvement, innovation, and adherence to best practices. Our quality policy is centered around delivering exceptional value, fostering a culture of excellence, and ensuring that every interaction reflects our dedication to integrity and professionalism.</p>
        </div>
        <div>
          <h2 className={styles.ethicsTitle}>Our Ethics Policy</h2>
          <p className={styles.ethicsText}>Third Door is dedicated to upholding the highest ethical standards in all our business practices. We believe in conducting our operations with integrity, transparency, and respect for all stakeholders. Our ethics policy emphasizes accountability, fairness, and social responsibility, ensuring that we not only comply with legal requirements but also contribute positively to the communities we serve. We are committed to fostering an inclusive and respectful workplace where ethical behavior is recognized and rewarded.</p>
        </div>
        <div>
          <h2 className={styles.sustainabilityTitle}>Our Sustainability Policy</h2>
          <p className={styles.sustainabilityText}>At Third Door, we are committed to promoting sustainability in all aspects of our business. Our sustainability policy focuses on minimizing our environmental impact, supporting social responsibility, and fostering economic growth. We strive to implement eco-friendly practices, reduce waste, and conserve resources while engaging with our community to drive positive change. We believe that sustainable business practices are essential for long-term success and are dedicated to integrating these principles into our operations, culture, and decision-making processes.</p>
        </div>
        <div>
          <h2 className={styles.diversityTitle}>Our Diversity and Inclusion Policy</h2>
          <p className={styles.diversityText}>Third Door is committed to fostering a diverse and inclusive workplace where all individuals are valued, respected, and empowered to contribute their unique perspectives. Our diversity and inclusion policy emphasizes equal opportunity, cultural awareness, and the celebration of differences. We strive to create an environment that promotes collaboration, innovation, and mutual respect, recognizing that diversity drives creativity and enhances our ability to serve a global clientele. We are dedicated to implementing practices that support diversity in recruitment, retention, and professional development, ensuring that every team member feels included and supported.</p>
        </div>
        <div>
          <h2 className={styles.communityTitle}>Our Community Engagement Policy</h2>
          <p className={styles.communityText}>At Third Door, we believe in the power of community and are dedicated to making a positive impact through active engagement and support. Our community engagement policy focuses on building strong relationships with local organizations, supporting social initiatives, and encouraging employee involvement in volunteer activities. We strive to contribute to the well-being and development of the communities we serve by leveraging our resources, expertise, and passion for social responsibility. Through collaboration and partnership, we aim to create meaningful change and foster a sense of shared purpose.</p>
        </div>
        <div>
          <h2 className={styles.privacyTitle}>Our Privacy Policy</h2>
          <p className={styles.privacyText}>Third Door is committed to protecting the privacy and confidentiality of our clients, partners, and employees. Our privacy policy outlines our practices for collecting, using, and safeguarding personal information in compliance with applicable data protection laws. We prioritize transparency and accountability in our data handling processes, ensuring that individuals have control over their information. We implement robust security measures to prevent unauthorized access, disclosure, or misuse of personal data. Our commitment to privacy reflects our dedication to building trust and maintaining the highest standards of integrity in all our interactions.</p>
        </div>
        <div>
          <h2 className={styles.securityTitle}>Our Information Security Policy</h2>
          <p className={styles.securityText}>At Third Door, we prioritize the protection of our information assets and are committed to maintaining a robust information security framework. Our information security policy outlines our approach to safeguarding data, systems, and networks from unauthorized access, breaches, and other cyber threats. We implement comprehensive security measures, including regular risk assessments, employee training, and incident response protocols, to ensure the confidentiality, integrity, and availability of information. Our commitment to information security reflects our dedication to protecting the interests of our clients, partners, and employees while fostering a culture of vigilance and responsibility.</p>
        </div>
        <div>
          <h2 className={styles.ethicalSourcingTitle}>Our Ethical Sourcing Policy</h2>
          <p className={styles.ethicalSourcingText}>Third Door is dedicated to promoting ethical sourcing practices throughout our supply chain. Our ethical sourcing policy emphasizes the importance of responsible procurement, fair labor practices, and environmental sustainability. We are committed to partnering with suppliers who share our values and adhere to high standards of integrity, human rights, and environmental stewardship. We conduct regular assessments and audits to ensure compliance with our ethical sourcing criteria, fostering transparency and accountability. By prioritizing ethical sourcing, we aim to contribute positively to the communities we impact and support sustainable business practices.</p>
        </div>
      </div>
    </div>
  )
}
