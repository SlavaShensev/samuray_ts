import React from 'react';
import Post from "./Post/Post";

export type postDataType = {
    id: number,
    message: string,
    likesCount: number,
}

const MyPosts = () => {
    const postData: Array<postDataType> = [
        {
            id: 1,
            message: 'Hello, how are you?',
            likesCount: 13,
        },
        {
            id: 2,
            message: 'It is my first post',
            likesCount: 34,
        },
    ]
    return (
        <div>
            My post
            <div>
                New posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                <Post id={postData[0].id}
                      message={postData[0].message}
                      likesCount={postData[0].likesCount}
                />
                <Post id={postData[1].id}
                      message={postData[1].message}
                      likesCount={postData[1].likesCount}
                />
            </div>
        </div>
    )
}

export default MyPosts;