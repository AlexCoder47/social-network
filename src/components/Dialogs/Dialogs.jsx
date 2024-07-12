import { Link } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsList}>
                <div className={s.Dialog + ' ' + s.active}>
                    <Link to="/dialogs/1">Dima</Link>
                </div>
                <div className={s.Dialog}>
                    <Link to="/dialogs/2">Egor</Link>
                </div>
                <div className={s.Dialog}>
                    <Link to="/dialogs/3">Anton</Link>
                </div>
                <div className={s.Dialog}>
                    <Link to="/dialogs/4">Stepik</Link>
                </div>
            </div>
            <div className={s.Messages}>
                <div className={s.Message}>Hello</div>
                <div className={s.Message}>How are you</div>
                <div className={s.Message}>That`s cool</div>
            </div>
        </div>
    )
}

export default Dialogs;