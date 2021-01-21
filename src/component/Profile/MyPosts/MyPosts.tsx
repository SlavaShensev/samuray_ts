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
        {
            id: 3,
            message: 'It is my second post',
            likesCount: 23,
        },
    ]
    const postsElements = postData.map(p => {
        return (
            <Post id={p.id}
                  message={p.message}
                  likesCount={p.likesCount}/>
        )
    })

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