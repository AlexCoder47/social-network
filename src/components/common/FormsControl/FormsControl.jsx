import s from './FormsControl.module.css';

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <input {...input} {...props}/>

            { hasError && <p><span>{meta.error}</span></p>}
            
        </div>
    )
}