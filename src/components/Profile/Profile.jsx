import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <ProfileInfo />
            <Posts posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;