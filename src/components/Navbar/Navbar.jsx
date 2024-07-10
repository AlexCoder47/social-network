import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <nav>
                <a href="">Profile</a>
                <a href="">Dialogs</a>
            </nav>
        </div>
    )
}

export default Navbar;