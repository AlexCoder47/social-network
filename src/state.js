import { rerenderTree } from "./render";

let state = {
    dialogsPage: {
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
            { id: 3, message: "Artur Mooorgan" },
        ],
    },
    
    profilePage: {
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
    },

    navbar: {
        friends: [
            { 
                id: 1,
                ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
                name: "Dima" },
            { 
                ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg", name: "Egor" },
            {   
                id: 2,
                ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
                name: "Anton" },
            { 
                id: 3,
                ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
                name: "Stepik" },
        ],
    }
}


export let addPost = (postText) => { 
    let newPost = {
        id: 4,
        text: postText,
        ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
    };

    state.profilePage.posts.push(newPost);
    rerenderTree(state);
}

export default state;