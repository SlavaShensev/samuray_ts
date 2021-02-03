import React from 'react';
import {AddPost, PostType} from '../../../redux/state';
import Post from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
    addPost: AddPost
}

const MyPosts = (props: MyPostsType) => {

    const postsElements = props.posts
        .map(p => <Post key={p.id} {...p}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const post = newPostElement.current ? newPostElement.current.value : '----'
        props.addPost(post)
    }


    return (
        <div>
            My post
            <div>
                New posts
            </div>
            <textarea
                ref={newPostElement}>
            </textarea>
            <button onClick={addPost}>
                Add post
            </button>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;