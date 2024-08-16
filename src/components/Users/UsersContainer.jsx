import { connect } from "react-redux";
import { addFriend, removeFriend, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from "../../redux/users-reducer";
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



const UsersContainer = connect(mapStateToProps, {addFriend,removeFriend,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,})(UsersAPIComponent);

export default UsersContainer;