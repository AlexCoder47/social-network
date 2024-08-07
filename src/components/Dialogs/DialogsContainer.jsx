import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state= props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let updateMessageText = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return <Dialogs addMessage={addMessage} updateMessageText={updateMessageText} newMessageText={state.dialogsPage.newMessageText} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>
}

export default DialogsContainer;