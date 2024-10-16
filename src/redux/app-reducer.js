import { stopSubmit } from "redux-form";
import { HeaderAPI, LoginAPI } from "../api/api";
import { getAuthMeTC, setAuthUserData } from "./auth-reducer";

let initialState = {
    initial: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_INITIAL":
            return { ...state, initial: true }
        default:
            return state;
    }
}

export const setInitial = () => ({ type: "SET_INITIAL" });

export const initialize = () => (dispatch) => {
    let promise = dispatch(getAuthMeTC());
    Promise.all([promise]).then(() => {dispatch(setInitial());})
}

export default appReducer;