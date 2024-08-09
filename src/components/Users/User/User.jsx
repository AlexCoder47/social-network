import s from "./User.module.css";

const User = (props) => {
    return (
        <div className={s.User}>
            <div className={s.avaDescr}>
                <img src={props.ava} alt="ava" />
                <div>
                    <h4>{props.name}</h4>
                    <p>Age: {props.age}</p>
                    <p>{props.location}</p>
                </div>
            </div>

            {/* { if (props.friend)} */}
            {/* <button onClick={props}>{props.friend ? "Удалить из друзей" : "Добавить в друзья"}</button> */}


            {
                props.friend 
                    ? <button onClick={ () => props.removeFriend(props.id)}>Удалить из друзей</button>
                    : <button onClick={ () => props.addFriend(props.id)}>Добавить в друзья</button>
            }
        </div>
    )
}

export default User;