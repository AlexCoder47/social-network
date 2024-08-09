let initialState = {
    dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Egor" },
        { id: 3, name: "Anton" },
        { id: 4, name: "Stepik" },
    ],

    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you" },
        { id: 3, message: "That`s cool" },
        { id: 4, message: "Artur Mooorgan" },
    ],
    newMessageText: ""
}



const dialogsReducer = (state = initialState , action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: state.newMessageText }],
                newMessageText: "",
            }
        case "UPDATE-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newText
            }
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