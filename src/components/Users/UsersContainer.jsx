import { connect } from "react-redux";
import { addFriendAC, removeFriendAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {dispatch(addFriendAC(userId))},
        removeFriend: (userId) => {dispatch(removeFriendAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;