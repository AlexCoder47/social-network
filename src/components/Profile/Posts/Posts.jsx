import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';



const Posts = (props) => {

    let PostsElememts = props.posts.map (e => <Post ava={e.ava} text={e.text}/>)

    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={s.Posts}> 
            <div className={s.addPost}>
               <input type="text" ref={newPost} value={props.newPostText} onChange={onPostChange}/>
               <button onClick={onAddPost}>Send</button>
            </div>

            {PostsElememts}
        </div>
    )
}

export default Posts;