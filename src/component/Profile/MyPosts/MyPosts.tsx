import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;