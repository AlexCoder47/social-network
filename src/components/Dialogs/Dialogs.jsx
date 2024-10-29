import { Link } from 'react-router-dom';
import s from './Dialogs.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { maxLengthCreator, required } from '../../utils/validators/validators';


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


let maxLength10 = maxLengthCreator(10);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input}  placeholder='Input text' name='message' validate={[required, maxLength10]}/>
            <button>Send</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);


const Dialogs = (props) => {

    let DialogsElements = props.dialogs.map(e => <Dialog key={e.id} id={e.id} name={e.name} />)

    let MessagesElements = props.messages.map(e => <Message key={e.id} message={e.message} />)

    let newMessage = React.createRef();

    // if (props.isAuth == false) {
    //     return <Navigate to="/login"/>
    // }

    const onSubmit = (values) => {props.addMessage(values.message)};

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsList}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                {MessagesElements}

                <div className={s.inputBlock}>
                    <DialogsReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;