import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <div className={s.Header}>
            <p>Simple</p>
            <div className={s.loginBlock}>
                { props.isAuth 
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <Link to='/login'>Login</Link>}
            </div>
        </div>
    )
}

export default Header;