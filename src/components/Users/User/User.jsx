import { Link } from "react-router-dom";
import s from "./User.module.css";
import userPhoto from '../../../assets/images/user.jpg';

const User = (props) => {
    return (
        <div className={s.User}>
            <Link to={'/profile/' + props.id}>
                <div className={s.avaDescr}>
                    <img src={props.ava || userPhoto} alt="ava" />
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
                    ? <button disabled={props.followingInProgress.some(id=>id===props.id)} onClick={() => {
                        props.unfollowTC(props.id);
                    }}>Удалить из друзей</button>
                    : <button disabled={props.followingInProgress.some(id=>id===props.id)} onClick={() => {
                        props.followTC(props.id);
                    }}>Добавить в друзья</button>
            }
        </div>
    )
}

export default User;