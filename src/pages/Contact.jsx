import styles from '../components/modules/Contact.module.css'
import contact from '../assets/contact.jpg'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Have any questions or a query?</p>
        <p>Just fill the form below and we'll be right with you.</p>
      </div>
      <div className={styles.main}>
        <div>
            <img className={styles.img} src={contact}/>
        </div>
        <form className={styles.form}>
            <Input placeholder='Your name'/>
            <Input placeholder='Phone Number'/>
            <Input placeholder='Email'/>
            <Input placeholder='Reason for contact' required />
            <textarea className={styles.textbox} placeholder="How can we help you?" ></textarea>
            <p>By signing up, you agree to our <a>Terms and Privacy Policy.</a></p>
            <Button color="white" bg="blue" fs="14px">Contact Us</Button>
        </form>
      </div>
    </div>
  )
}
