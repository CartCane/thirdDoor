export const STEPS = ["help","name", "email", "phone", "concern", "done"];

export const initialState = {
    messages: [
        {sender: "bot", text: "Hi 👋 How can I help you today?"}
    ],
    stepIndex: 0,
    isBotTyping: false,
    formData: {
        help: "",
        name: "",
        email: "",
        phone: "",
        concern: ""
    }
};

export function chatReducer(state, action) {
    switch (action.type) {
        case "USER_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.payload],
                isBotTyping: true
            };

        case "BOT_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.payload],
                isBotTyping: false
            }

        case "SAVE_INPUT":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [STEPS[state.stepIndex]]: action.payload
                }
            };

        case "NEXT_STEP":
            return {
                ...state,
                stepIndex: state.stepIndex + 1
            };

        default:
            return state;
    }
}