import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <ProfileInfo />
            <PostsContainer/>
        </div>
    )
}

export default Profile;