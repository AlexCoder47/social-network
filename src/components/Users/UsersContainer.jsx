import { connect } from "react-redux";
import { addFriend, removeFriend, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingInProgress, toggleIsFetching } from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

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



const UsersContainer = connect(mapStateToProps, {addFriend,removeFriend,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching, toggleFollowingInProgress})(UsersAPIComponent);

export default UsersContainer;