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
        props.dispatch({type: "ADD-MESSAGE"});
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch({type: "UPDATE-MESSAGE-TEXT", newText: text});
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsList}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                {MessagesElements}

                <div className={s.inputBlock}>
                    <input type="text" ref={newMessage} value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;