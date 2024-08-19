import React from "react";
import Users from "./Users";
import { UsersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {

    

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     //console.log(data);
        //     this.props.toggleIsFetching(false); 
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
    }

    onPageChanged = (p) => {
        this.props.getUsersThunkCreator(p, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(p);
        // UsersAPI.getUsers(p, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // })
    }



    render() {
        return (
            <>
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} users={this.props.users} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} isFetching={this.props.isFetching} toggleFollowingInProgress={this.props.toggleFollowingInProgress} followingInProgress={this.props.followingInProgress} followTC={this.props.followTC} unfollowTC={this.props.unfollowTC}/>
            </>
        )
    }
}

export default UsersAPIComponent;