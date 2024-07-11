import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.Post}> 
            <div className={s.post}>
                <img src={props.ava} alt="" />
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Post;