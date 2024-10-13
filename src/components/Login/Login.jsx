import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';


let maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Input login" name='login' component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder="Input password" name='passwd' component={Input} validate={[required, maxLength10]}/>
            </div>
            <div className={s.checkbox}>
                <Field type="checkbox" name='remember' component={"input"} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = () => {}

    return (
        <div className={s.Login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

export default Login;