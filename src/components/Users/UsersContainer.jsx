import { connect } from "react-redux";
import { addFriendAC, removeFriendAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

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