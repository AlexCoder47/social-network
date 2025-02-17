import { ProfileAPI } from "../api/api";

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
    newPostText: "",
    profile: null,
    status: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 4,
                text: action.post,
                ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }
        case "UPDATE-POST-TEXT": {
            return {...state, newPostText: action.newText,}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.userProfile,}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "SAVE-PHOTO-SUCCESS": {
            return {...state, profile: {...state.profile, photos: action.photo}}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (post) => {return {type: "ADD-POST", post}};
export const setUserProfile = (userProfile) => {return {type: "SET-USER-PROFILE", userProfile}};
export const setStatus = (status) => {return {type: "SET-STATUS", status}};
export const savePhotoSuccess = (photo) => {return {type: "SAVE-PHOTO-SUCCESS", photo}}


export const getProfileTC = (id) => {
    return (dispatch) => {
        ProfileAPI.getProfile(id).then(response => {
            dispatch(setUserProfile(response));
        })
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        ProfileAPI.getStatus(id).then(response => {
            dispatch(setStatus(response))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
            
        })
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}


export default profileReducer;