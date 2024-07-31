import { Link } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends/Friends';

const Navbar = (props) => {
    return (
        <div className={s.Navbar}>
            <nav>
                <Link to="/">Profile</Link>
                <Link to="/dialogs">Dialogs</Link>
            </nav>

            <Friends friends={props.navbar.friends}/>
        </div>
    )
}

export default Navbar;