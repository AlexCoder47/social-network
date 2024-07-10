import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <img src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1659744584_1-kartinkin-net-p-oboi-na-rabochii-stol-more-krasivo-1.jpg" alt="" />

            <div className={s.comment}>
                <img src={props.ava} alt="" />
            </div>
        </div>
    )
}

export default Profile;