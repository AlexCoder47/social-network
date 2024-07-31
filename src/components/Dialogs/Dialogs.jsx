import { Link } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialog = (props) => {
    return (
        <div className={s.Dialog + ' ' + s.active}>
            <Link to={"/dialogs/" + props.id}>{props.name}</Link>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.Message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let DialogsElements = props.state.dialogs.map ( e => <Dialog id={e.id} name={e.name} /> )

    let MessagesElements = props.state.messages.map ( e => <Message message={e.message} />)
    
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsList}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                {MessagesElements}
            </div>
        </div>
    )
}

export default Dialogs;