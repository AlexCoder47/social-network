import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={s.Profile}>
            <ProfileInfo />
            <Posts />
        </div>
    )
}

export default Profile;