import ContactItem from './ContactItem'
import {Phone, Mail, Building} from 'lucide-react';
import styles from './ContactInfo.module.css'

export default function ContactInfo() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Contact info</h4>
      <ContactItem header="8088723265" icon={<Phone />} description="Mon-Sat: 8:00 - 21:00"/>
      <ContactItem header="connect@thirddoor.com" icon={<Mail />} description="24/7 customer support"/>
      <ContactItem 
        header="114/5, Old Madras Road, Halasuru, Hoysala Nagar, Bengaluru, Karnataka 560008"
        icon={<Building />}
        description="Main office location"
      />
    </div>
  )
}
