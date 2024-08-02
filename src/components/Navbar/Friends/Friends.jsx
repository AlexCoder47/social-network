import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {

    let FriendsElements = props.friends.map ( e => <Friend ava={e.ava} name={e.name} /> )

    return (
        <div className={s.friends}>
            <h3>Friends</h3>

            {FriendsElements}
        </div>
    )
}

export default Friends;