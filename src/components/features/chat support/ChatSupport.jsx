import styles from './ChatSupport.module.css';

export default function ChatSupport() {
  return (
    <div className={styles.chatSupportContainer}>
      <img src="/chat-support.jpg" alt="Chat Support" className={styles.chatSupportImage} />
    </div>
  )
}
