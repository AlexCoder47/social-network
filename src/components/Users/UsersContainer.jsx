import { connect } from "react-redux";
import Users from "./Users";
import { addFriendAC, removeFriendAC, setUsersAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {dispatch(addFriendAC(userId))},
        removeFriend: (userId) => {dispatch(removeFriendAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;