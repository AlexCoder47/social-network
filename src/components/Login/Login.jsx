import s from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form>
            <div>
                <input type="text" placeholder="Input login" name='login' />
            </div>
            <div>
                <input type="text" placeholder="Input password" name='passwd' />
            </div>
            <div className={s.checkbox}>
                <input type="checkbox" name='remember' /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    return (
        <div className={s.Login}>
            <h1>Login</h1>
            <LoginForm />
        </div>

    )
}

export default Login;