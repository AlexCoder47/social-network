import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {

    let PostsElememts = props.posts.map (e => <Post ava={e.ava} text={e.text}/>)

    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
        newPost.current.value = "";
    }

    return (
        <div className={s.Posts}> 
            <div className={s.addPost}>
               <input type="text" ref={newPost}/>
               <button onClick={addPost}>Send</button>
            </div>

            {PostsElememts}
        </div>
    )
}

export default Posts;