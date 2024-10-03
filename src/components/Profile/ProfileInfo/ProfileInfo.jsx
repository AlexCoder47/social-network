import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.ProfileInfo}>
            <img src={props.profile.photos.large} alt="" />
            <div>
                <p className={s.name}>{props.profile.fullName}</p>
                <div className={s.infoBlock}>
                    <div>
                        <p><span>About me</span>:  {props.profile.aboutMe}</p>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ProfileInfo;