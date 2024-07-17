import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {

    let PostsData = [
        {
            id: 1,
            ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            text: "hello",
        },
        {
            id: 2,
            ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            text: "how are you",
        },
        {
            id: 3,
            ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
            text: "that`s cool",
        },
    ]

    let PostsElememts = PostsData.map (e => <Post ava={e.ava} text={e.text}/>)

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