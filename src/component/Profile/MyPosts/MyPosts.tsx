import React from 'react';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../index";

const MyPosts: React.FC<ProfilePageType> = (props) => {
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