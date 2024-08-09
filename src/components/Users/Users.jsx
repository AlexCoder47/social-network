import User from "./User/User";
import s from "./Users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers ([
            {   
                id: 1,
                friend: true,
                ava: "img/stepik.jpg",
                name: "Stepanidus Stepikovich",
                age: "8",
                location: "Moscow, Russia",
                status: "last seen Aug 04 at 16:16"
            },
            {   
                id: 2,
                friend: false,
                ava: "https://cdn-edge.kwork.ru/files/avatar/large_r/44/4289180-2.jpg",
                name: "Alex Coder",
                age: "18",
                location: "Moscow, Russia",
                status: "online"
            },
            {   
                id: 3,
                friend: true,
                ava: "img/ivan.jpg",
                name: "Ivan Polyakov",
                age: "19",
                location: "Tumen, Russia",
                status: "online"
            },
        ])
    }

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