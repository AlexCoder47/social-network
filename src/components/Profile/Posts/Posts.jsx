import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    return (
        <div className={s.Posts}> 
            <div className={s.addPost}>
               <input type="text" />
               <button>Send</button>
            </div>

            <Post ava="https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg" text="hello"/>

            <Post ava="https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg" text="how are you"/>

            <Post ava="https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg" text="that`s cool"/>
        </div>
    )
}

export default Posts;