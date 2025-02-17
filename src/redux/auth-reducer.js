import { stopSubmit } from "redux-form";
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
            return { ...state, ...action.data }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: "SET_USER_DATA", data: { userId, email, login, isAuth } });

export const getAuthMeTC = () => {
    return (dispatch) => {
        return HeaderAPI.getAuthMe().then(response => {
            if (response.resultCode === 0) {
                let { id, login, email } = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await LoginAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuthMeTC());
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Something wrong";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const logout = () => (dispatch) => {
    LoginAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer;