import profileReducer, { addPostActionCreator } from "./profile-reducer"


it ('new post should be added', () => {

    let state = {
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
    }
    let action = addPostActionCreator("this is test post");
    let newState = profileReducer(state, action);

    expect(newState.posts[3].text).toBe("this is test post");
})