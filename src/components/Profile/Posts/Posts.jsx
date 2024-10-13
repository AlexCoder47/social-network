import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControl/FormsControl';

let maxLength10 = maxLengthCreator(10);

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input} name='post' placeholder='Input text' validate={[required, maxLength10]}/>
            <button>Send</button>
        </form> 
    )
}

const PostsReduxForm = reduxForm({form: 'post'})(PostsForm);

const Posts = (props) => {

    let PostsElememts = props.posts.map (e => <Post ava={e.ava} text={e.text}/>)

    let newPost = React.createRef();

    const onSubmit = (values) => {props.addPost(values.post)};

    return (
        <div className={s.Posts}> 
            <div className={s.addPost}>
               <PostsReduxForm onSubmit={onSubmit}/>
            </div>

            {PostsElememts}
        </div>
    )
}

export default Posts;