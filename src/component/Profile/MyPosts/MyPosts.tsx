import React from 'react';
import { ProfilePageType } from '../../../redux/state';
import Post from "./Post/Post";

const MyPosts = (props:ProfilePageType) => {
    const postsElements = props.posts
        .map(p => <Post {...p}/>)
    return (
        <div>
            My post
            <div>
                New posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;