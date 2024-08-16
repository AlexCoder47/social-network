import { Link } from "react-router-dom";
import s from "./User.module.css";
import axios from "axios";
import { UsersAPI } from "../../../api/api";

const User = (props) => {
    return (
        <div className={s.User}>
            <Link to={'/profile/' + props.id}>
                <div className={s.avaDescr}>
                    <img src={props.ava} alt="ava" />
                    <div>
                        <h4>{props.name}</h4> 
                        <p><span>Status</span>: {props.status}</p>
                    </div>
                </div>
            </Link>


            {/* { if (props.friend)} */}
            {/* <button onClick={props}>{props.friend ? "Удалить из друзей" : "Добавить в друзья"}</button> */}


            {
                props.friend
                    ? <button onClick={() => {
                        UsersAPI.updateFriends(props.id).then(response => {
                            console.log(response);
                            if (response.resultCode === 0){
                                props.removeFriend(props.id)
                            }
                            
                        })
                    }}>Удалить из друзей</button>
                    : <button onClick={() => {
                        UsersAPI.updateFriends(props.id).then(response => {
                            console.log(response);
                            if (response.resultCode === 0){
                                props.addFriend(props.id)
                            }
                            
                        })
                    }}>Добавить в друзья</button>
            }
        </div>
    )
}

export default User;