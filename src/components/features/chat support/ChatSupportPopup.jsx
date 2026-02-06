import { useState } from 'react';
import styles from './ChatSupportPopup.module.css';

export default function ChatSupportPopup({open, setOpen}) {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState([]);
    const [isBotTyping, setIsBotTyping] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            sender: "user",
            text: inputValue,
        };

        setMessage((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsBotTyping(true);

        setTimeout(() => {
        const botMessage = {
            sender: "bot",
            text: getBotResponse(inputValue),
        };

        setMessage((prev) => [...prev, botMessage]);
        setIsBotTyping(false);
        }, 1500);
    }

    return (
        <div className={`${styles.chatSupportPopup} ${open ? styles.open : ''}`}>
            <div className={styles.chatSupportHeader}>
            <h3>Chat Support</h3>
            <button onClick={ () => setMessage([]) } className={styles.clearButton}>Clear</button>
            </div>
            <div className={styles.chatSupportBody}>
                {message.map( (msg, i) => <p key={i}>{msg.sender}: {msg.text}</p>)}
            {/* Chat support content goes here */}
            </div>
            <form onSubmit={handleSubmit} className={styles.chatSupportInputContainer}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button>send</button>
            </form>
        </div>
    )
}

function getBotResponse(userText) {
  const input = userText.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hey! 👋 How can I help you?";
  }

  if (input.includes("bye")) {
    return "Goodbye! Have a great day 😊";
  }

  return "Hmm… I am still learning 🤖. Currently, i can only answer HI and BYE";
}

