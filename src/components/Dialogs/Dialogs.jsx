import { Link, Navigate } from 'react-router-dom';
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

    let DialogsElements = props.dialogs.map(e => <Dialog key={e.id} id={e.id} name={e.name} />)

    let MessagesElements = props.messages.map(e => <Message key={e.id} message={e.message} />)

    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateMessageText(text);
    }

    if (props.isAuth == false) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsList}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                {MessagesElements}

                <div className={s.inputBlock}>
                    <input type="text" ref={newMessage} value={props.newMessageText} onChange={onMessageChange}/>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;