import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import s2 from '../common/FormsControl/FormsControl.module.css';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';


let maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Input email" name='email' component={Input} validate={[required, maxLength50]}/>
            </div>
            <div>
                <Field placeholder="Input password" name='password' component={Input} validate={[required, maxLength50]} type="password"/>
            </div>
            <div className={s.checkbox}>
                <Field type="checkbox" name='remember' component={"input"} /> Remember me
            </div>
            { props.error &&
            <div className={s2.formError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {props.login(formData.email, formData.password, formData.rememberMe)}
    if (props.isAuth) {return <Navigate to={"/profile"}/>}
    
    return (
        <div className={s.Login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);