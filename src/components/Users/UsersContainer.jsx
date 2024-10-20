import { connect } from "react-redux";
import { addFriend, followTC, getUsersThunkCreator, removeFriend, setCurrentPage, setTotalUsersCount, toggleFollowingInProgress, unfollowTC } from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress 

//     }
// }


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state) 

    }
}


export default compose(
    connect(mapStateToProps, {addFriend,removeFriend,setCurrentPage,setTotalUsersCount, toggleFollowingInProgress, getUsersThunkCreator, followTC, unfollowTC})
)(UsersAPIComponent);;