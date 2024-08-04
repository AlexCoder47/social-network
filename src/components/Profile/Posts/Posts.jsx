import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {

    let PostsElememts = props.posts.map (e => <Post ava={e.ava} text={e.text}/>)

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch({type: "UPDATE-POST-TEXT", newText: text})
    }

    return (
        <div className={s.Posts}> 
            <div className={s.addPost}>
               <input type="text" ref={newPost} value={props.newPostText} onChange={onPostChange}/>
               <button onClick={addPost}>Send</button>
            </div>

            {PostsElememts}
        </div>
    )
}

export default Posts;