import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusithHooks from './ProfileStatus';
import userPhoto from '../../../assets/images/user.jpg';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.ProfileInfo}>
            <img src={props.profile.photos.large || userPhoto} alt="" />
           
            <div>
                <p className={s.name}>{props.profile.fullName}</p>
                <div className={s.infoBlock}>
                        <p><span className={s.about_me}>About me</span>:  {props.profile.aboutMe}</p>
                        <ProfileStatusithHooks status={props.status} updateStatus={props.updateStatus}/>

                </div>


            </div>
            {props.isOwner && 
                <input type='file'/>
            }
        </div>
    )
}

export default ProfileInfo;