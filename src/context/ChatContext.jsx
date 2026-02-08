import { createContext, useContext, useReducer } from "react";
import { chatReducer, initialState, STEPS } from "./chatReducer";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  function sendMessage(text) {
    dispatch({
      type: "USER_MESSAGE",
      payload: { sender: "user", text }
    });

    setTimeout(() => processBotFlow(text), 1000);
  }

  function processBotFlow(input) {
    const currentStep = STEPS[state.stepIndex];

    if (!isValidInput(currentStep, input)) {
        dispatch({
        type: "BOT_MESSAGE",
        payload: {
            sender: "bot",
            text: getValidationError(currentStep)
        }
        });
        return;
    }

    dispatch({ type: "SAVE_INPUT", payload: input });

    const nextStepIndex = state.stepIndex + 1;
    const nextStep = STEPS[nextStepIndex];

    dispatch({ type: "NEXT_STEP" });

    dispatch({
      type: "BOT_MESSAGE",
      payload: { sender: "bot", text: getBotQuestion(nextStep, input) }
    });
  }

  return (
    <ChatContext.Provider value={{ ...state, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}

function getBotQuestion(step, previousInput) {
  switch (step) {
    case "name":
      return "Sure 👍 Before we continue, may I know your name?";
    case "email":
      return `Nice to meet you, ${previousInput} 😊 What’s your email?`;
    case "phone":
      return "Thanks! 📞 Can I have your phone number?";
    case "concern":
      return "Got it 👍 Please explain your concern briefly.";
    case "done":
      return "Thank you! Our team will contact you shortly 🙌";
    default:
      return "";
  }
}

function isValidInput(step, value){
    switch (step) {
        case "email":
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case "phone":
            return /^[6-9]\d{9}$/.test(value);
        default:
            return value.trim().length > 0;
    }
}

function getValidationError(step) {
  switch (step) {
    case "email":
      return "Please enter a valid email address 📧";
    case "phone":
      return "Please enter a valid 10-digit phone number 📞";
    default:
      return "This field can’t be empty 🙂";
  }
}
