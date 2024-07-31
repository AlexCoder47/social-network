import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {

    let PostsElememts = props.posts.map (e => <Post ava={e.ava} text={e.text}/>)

    return (
        <div className={s.Posts}> 
            <div className={s.addPost}>
               <input type="text" />
               <button>Send</button>
            </div>

            {PostsElememts}
        </div>
    )
}

export default Posts;