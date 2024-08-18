let initialState = {
    users: [],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 665,
    isFetching: false,
    followingInProgress: false,
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
            return { ...state, followingInProgress: action.isFetching }
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
export const toggleFollowingInProgress = (isFetching) => { return { type: "TOGGLE-IS-FOLLOWING_PROGRESS", isFetching } };

export default usersReducer;