let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-FRIEND":
            return {
                ...state,
                users: state.users.map( e => {
                    if (e.id === action.userId) {
                        return {...e, friend: true}
                    }
                    return e;
                }),
            }
        case "UPDATE-FRIEND":
            return {
                ...state,
                users: state.users.map( e => {
                    if (e.id === action.userId) {
                        return {...e, friend: false}
                    }
                    return e;
                }),
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};


export const addFriendAC = (userId) => {
    return {
        type: "ADD-FRIEND",
        userId
    }
}

export const removeFriendAC = (userId) => {
    return {
        type: "UPDATE-FRIEND",
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: "SET-USERS",
        users
    }
}

export default usersReducer;