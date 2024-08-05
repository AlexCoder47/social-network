import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';



const Posts = (props) => {

    let PostsElememts = props.posts.map (e => <Post ava={e.ava} text={e.text}/>)

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(updatePostTextActionCreator(text))
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