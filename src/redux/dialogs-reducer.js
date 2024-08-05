const dialogsReducer = (state, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = { id: 5, message: state.newMessageText };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case "UPDATE-MESSAGE-TEXT":
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => {
    return {
        type: "ADD-MESSAGE"
    }
}

export const updateMessageTextActionCreator = (text) => {
    return {
        type: "UPDATE-MESSAGE-TEXT",
        newText: text
    }
}

export default dialogsReducer;