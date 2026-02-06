import { useState } from 'react';
import styles from './ChatSupport.module.css';
import ChatSupportPopup from './ChatSupportPopup';

export default function ChatSupport() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ChatSupportPopup open={open} setOpen={setOpen} />
      <div className={styles.chatSupportContainer} onClick={ () => setOpen( prev => !prev ) }>
        <img src="/chat-support.jpg" alt="Chat Support" className={styles.chatSupportImage} />
      </div>
    </div>
  )
}
