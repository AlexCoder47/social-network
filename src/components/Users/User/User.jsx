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
                    ? <button disabled={props.followingInProgress} onClick={() => {
                        console.log("click");
                        props.toggleFollowingInProgress(true);
                        UsersAPI.updateFriends(props.id, "delete").then(response => {
                            console.log(response);


                            props.removeFriend(props.id)


                            props.toggleFollowingInProgress(false);

                        })
                    }}>Удалить из друзей</button>
                    : <button disabled={props.followingInProgress} onClick={() => {
                        props.toggleFollowingInProgress(true);
                        UsersAPI.updateFriends(props.id, "add").then(response => {
                            console.log(response);

                            props.addFriend(props.id)


                            props.toggleFollowingInProgress(false);
                        })
                    }}>Добавить в друзья</button>
            }
        </div>
    )
}

export default User;