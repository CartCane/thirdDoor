import { useState, useRef, useEffect } from 'react';
import {useChat} from '../../../context/ChatContext';
import styles from './ChatSupportPopup.module.css';
import founder from '../../../assets/thirdDoorFounder.png'

export default function ChatSupportPopup({open}) {
    const [inputValue, setInputValue] = useState("");
    const {messages, sendMessage, isBotTyping} = useChat();

    const inputRef = useRef(null);

    useEffect(() => {
        if (!isBotTyping && open){
            inputRef.current?.focus();
        }
    }, [isBotTyping, open]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValue.trim()) return;

        sendMessage(inputValue);
        setInputValue("");
    }

    return (
        <div className={`${styles.chatSupportPopup} ${open ? styles.open : ''}`}>
            <div className={styles.chatSupportHeader}>
                <img src={founder} alt="chatSupportImage" />
                <div className={styles.headerContent}>
                    <h3>Chat Support</h3>
                    <p><span></span> We reply immediately</p>
                </div>
            </div>

            <div className={styles.chatSupportBody}>
                {messages.map( (msg, i) => 
                    <div 
                        className={`${styles.chatBodyMain} ${msg.sender === "user" ? styles.right : styles.left}`} 
                        key={i}
                    >
                        <span className={styles.left}>{msg.sender === "bot" && "🤖"}</span>
                        <p className={`${styles.chatBody}`}>{msg.text}</p>
                        <span className={styles.right}>{msg.sender === "user" && "🙎‍♂️"}</span>
                    </div>
                )}
                {isBotTyping && <p>Bot thinking...</p>}
            </div>

            <form onSubmit={handleSubmit} className={styles.chatSupportInputContainer}>
                <input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isBotTyping}
                    placeholder="How can we help?"
                />
                {/* <button>send</button> */}
            </form>
        </div>
    )
}

