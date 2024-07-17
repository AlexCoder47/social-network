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

const Dialogs = () => {

    let DialogsData = [
        { id: 1, name: "Dima" },
        { id: 2, name: "Egor" },
        { id: 3, name: "Anton" },
        { id: 4, name: "Stepik" },
    ]

    let MessagesData = [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you" },
        { id: 3, message: "That`s cool" },
        { id: 3, message: "Artur Mooorgan" },
    ]

    let DialogsElements = DialogsData.map ( e => <Dialog id={e.id} name={e.name} /> )

    let MessagesElements = MessagesData.map ( e => <Message message={e.message} />)
    
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