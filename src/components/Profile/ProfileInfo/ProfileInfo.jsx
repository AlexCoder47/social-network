import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

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
                        <p><span>Contacts</span>: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a> </p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ProfileInfo;