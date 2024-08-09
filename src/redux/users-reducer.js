let initialState = {
    users: [
        {   
            id: 1,
            friend: true,
            ava: "img/stepik.jpg",
            name: "Stepanidus Stepikovich",
            age: "8",
            location: "Moscow, Russia",
            status: "last seen Aug 04 at 16:16"
        },
        {   
            id: 2,
            friend: false,
            ava: "https://cdn-edge.kwork.ru/files/avatar/large_r/44/4289180-2.jpg",
            name: "Alex Coder",
            age: "18",
            location: "Moscow, Russia",
            status: "online"
        },
        {   
            id: 3,
            friend: true,
            ava: "img/ivan.jpg",
            name: "Ivan Polyakov",
            age: "19",
            location: "Tumen, Russia",
            status: "online"
        },
    ],
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