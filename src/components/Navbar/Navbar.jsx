import { Link } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends/Friends';

const Navbar = (props) => {
    return (
        <div className={s.Navbar}>
            <nav>
                <Link to="/profile/31548">Profile</Link>
                <Link to="/dialogs">Dialogs</Link>
                <Link to="/users">Users</Link>
            </nav>

            {/* <Friends friends={props.sidebar.friends}/> */}
        </div>
    )
}

export default Navbar;