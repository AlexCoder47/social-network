import { connect } from "react-redux";
import { addFriend, followTC, getUsersThunkCreator, removeFriend, setCurrentPage, setTotalUsersCount, toggleFollowingInProgress, unfollowTC } from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress 

    }
}


export default compose(
    connect(mapStateToProps, {addFriend,removeFriend,setCurrentPage,setTotalUsersCount, toggleFollowingInProgress, getUsersThunkCreator, followTC, unfollowTC})
)(UsersAPIComponent);;