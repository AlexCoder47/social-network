import { UsersAPI } from "../api/api";

let initialState = {
    users: [],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 665,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-FRIEND":
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return { ...e, followed: true }
                    }
                    return e;
                }),
            }
        case "UPDATE-FRIEND":
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return { ...e, followed: false }
                    }
                    return e;
                }),
            }
        case "SET-USERS":
            return { ...state, users: action.users }
        case "SET-CURRENT-PAGE":
            return { ...state, currentPage: action.currentPage }
        case "SET-TOTAL-USERS-COUNT":
            return { ...state, totalUsersCount: action.totalUsersCount }
        case "TOGGLE-IS-FETCHING":
            return { ...state, isFetching: action.isFetching }
        case "TOGGLE-IS-FOLLOWING_PROGRESS":
            return { ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId) }
        default:
            return state;
    }
};


export const addFriend = (userId) => { return { type: "ADD-FRIEND", userId } };
export const removeFriend = (userId) => { return { type: "UPDATE-FRIEND", userId } };
export const setUsers = (users) => { return { type: "SET-USERS", users } };
export const setCurrentPage = (currentPage) => { return { type: "SET-CURRENT-PAGE", currentPage } };
export const setTotalUsersCount = (totalUsersCount) => { return { type: "SET-TOTAL-USERS-COUNT", totalUsersCount } };
export const toggleIsFetching = (isFetching) => { return { type: "TOGGLE-IS-FETCHING", isFetching } };
export const toggleFollowingInProgress = (isFetching, userId) => { return { type: "TOGGLE-IS-FOLLOWING_PROGRESS", isFetching, userId } };


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage)); 
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const followTC = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        UsersAPI.addFriends(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(addFriend(id));
            }
            dispatch(toggleFollowingInProgress(false, id));

        })
    }
}

export const unfollowTC = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        UsersAPI.removeFriends(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(removeFriend(id));
            }

            dispatch(toggleFollowingInProgress(false, id));
        })
    }
}

export default usersReducer;