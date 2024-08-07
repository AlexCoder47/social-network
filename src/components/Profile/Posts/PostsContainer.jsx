import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import Posts from './Posts';


const PostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updatePostText = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text))
    }

    return <Posts updatePostText={updatePostText} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
}

export default PostsContainer;