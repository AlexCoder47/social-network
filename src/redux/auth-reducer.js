import { HeaderAPI, LoginAPI } from "../api/api";

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
            return { ...state, ...action.data} 
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: "SET_USER_DATA", data: {userId, email, login, isAuth}});

export const getAuthMeTC = () => {
    return (dispatch) => {
        HeaderAPI.getAuthMe().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    LoginAPI.login(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(getAuthMeTC());
        }
    })
}

export const logout = () => (dispatch) => {
    LoginAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer;