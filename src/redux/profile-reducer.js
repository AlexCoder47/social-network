let initialState = {
    posts: [
        {
            id: 1,
            ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            text: "hello",
        },
        {
            id: 2,
            ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            text: "how are you",
        },
        {
            id: 3,
            ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            text: "that`s cool",
        },
    ],
    newPostText: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 4,
                text: state.newPostText,
                ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }
        case "UPDATE-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}

export const updatePostTextActionCreator = (text) => {
    return {
        type: "UPDATE-POST-TEXT",
        newText: text
    }
}

export default profileReducer;