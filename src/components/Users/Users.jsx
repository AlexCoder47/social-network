import User from "./User/User";
import s from "./Users.module.css";

const Users = (props) => {

    let usersElements = props.users.map(e => <User key={e.id} id={e.id} friend={e.friend} ava={e.ava} name={e.name} age={e.age} location={e.location} status={e.status} addFriend={props.addFriend} removeFriend={props.removeFriend}/>);

    return (
        <div className={s.Users}>
            <h3>Users</h3>
            <div className={s.usersBlock}>
                {usersElements}
            </div>
        </div>
    )
}

export default Users;