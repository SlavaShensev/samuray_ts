import React from 'react';
import {ProfilePageType} from '../../../redux/state';
import Post from "./Post/Post";

const MyPosts = (props: ProfilePageType) => {
    const postsElements = props.posts
        .map(p => <Post key={p.id} {...p}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const post = newPostElement.current?.value
        console.log(post)
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