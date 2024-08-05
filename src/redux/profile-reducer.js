const profileReducer = (state, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 4,
                text: state.newPostText,
                ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            };
    
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
    
        case "UPDATE-POST-TEXT":
            state.newPostText = action.newText;
            return state;
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