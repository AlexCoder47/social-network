import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import User from "./User/User";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_per_page=${this.props.pageSize}`).then(response => {
            console.log(response);
            this.props.setUsers(response.data.data);
            this.props.setTotalUsersCount(response.data.items);
        })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`http://localhost:3001/users?_page=${p}&_per_page=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.data);
        })
    }



    render() {

        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i); 
        }

        let usersElements = this.props.users.map(e => {
            return <User key={e.id} id={e.id} friend={e.friend} ava={e.ava} name={e.name} age={e.age} location={e.location} status={e.status} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} />
        });

        return (
            <div className={s.Users}>
                <h3>Users</h3>
                <div className={s.pages}> 
                    {pages.map( p => {
                        return <span key={p} className={this.props.currentPage === p ? s.active : s.innactive} onClick={() => {this.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
                <div className={s.usersBlock}>
                    {usersElements}
                </div>
            </div>
        )
    }
}

export default Users;