import { HeaderAPI } from "../api/api";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return { ...state, ...action.data, isAuth: true} 
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: "SET_USER_DATA", data: {userId, login, email}});

export const getAuthMeTC = () => {
    return (dispatch) => {
        HeaderAPI.getAuthMe().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuthUserData(id, login, email));
            }
        })
    }
}

export default authReducer;