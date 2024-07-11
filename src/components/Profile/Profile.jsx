import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.Profile}>
            <img src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1659744584_1-kartinkin-net-p-oboi-na-rabochii-stol-more-krasivo-1.jpg" alt="" />


            <Posts />

            
        </div>
    )
}

export default Profile;