import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import User from "./User/User";
import Users from "./Users";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_per_page=${this.props.pageSize}`).then(response => {
            // console.log(response);
            this.props.toggleIsFetching(false); 
            this.props.setUsers(response.data.data);
            this.props.setTotalUsersCount(response.data.items);
        })
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`http://localhost:3001/users?_page=${p}&_per_page=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.data);
        })
    }



    render() {
        return (
            <>
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} users={this.props.users} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} isFetching={this.props.isFetching}/>
            </>
        )
    }
}

export default UsersAPIComponent;