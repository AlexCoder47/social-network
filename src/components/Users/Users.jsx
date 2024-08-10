import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import User from "./User/User";

class Users extends React.Component {
    
    componentDidMount() {
        axios.get("http://localhost:3001/list").then(response => {
            this.props.setUsers(response.data);
            console.log(response.data);
        })
    }



    render() {

        let usersElements = this.props.users.map(e => <User key={e.id} id={e.id} friend={e.friend} ava={e.ava} name={e.name} age={e.age} location={e.location} status={e.status} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} />);

        return <div className={s.Users}>
            <h3>Users</h3>
            <div className={s.usersBlock}>
                {usersElements}
            </div>
        </div>
    }
}

export default Users;