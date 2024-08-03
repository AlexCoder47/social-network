import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <ProfileInfo />
            <Posts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile;