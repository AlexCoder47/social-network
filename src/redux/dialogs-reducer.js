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
}



const dialogsReducer = (state = initialState , action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: action.message }],
            }
        default:
            return state;
    }

}

export const addMessageActionCreator = (message) => {
    return {
        type: "ADD-MESSAGE",
        message
    }
}

export default dialogsReducer;