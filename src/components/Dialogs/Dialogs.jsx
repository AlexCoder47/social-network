import { Link } from 'react-router-dom';
import s from './Dialogs.module.css';
import React from 'react';

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

    let DialogsElements = props.dialogsPage.dialogs.map(e => <Dialog id={e.id} name={e.name} />)

    let MessagesElements = props.dialogsPage.messages.map(e => <Message message={e.message} />)

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsList}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                {MessagesElements}

                <div className={s.inputBlock}>
                    <input type="text" ref={newMessage}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;