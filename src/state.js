let store = {
    _state: {
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
                { id: 4, message: "Artur Mooorgan" },
            ],
            newMessageText: ""
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
            newPostText: ""
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
    },

    getState() {
        return this._state;
    },

    _rerenderTree () {

    },
    addPost () { 
        let newPost = {
            id: 4,
            text: this._state.profilePage.newPostText,
            ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._rerenderTree(this._state);
    },
    updatePostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderTree(this._state);
    },

    addMessage () {
        let newMessage = { id: 5, message: this._state.dialogsPage.newMessageText };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.newMessageText = "";
        this._rerenderTree(this._state);
    },
    updateMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._rerenderTree(this._state);
    },
    subscribe (observer) {
        this._rerenderTree = observer;
    }
}


export default store;