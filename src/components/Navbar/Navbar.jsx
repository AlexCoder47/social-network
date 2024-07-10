import { Link } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <nav>
                <Link to="/">Profile</Link>
                <Link to="/dialogs">Dialogs</Link>
            </nav>
        </div>
    )
}

export default Navbar;