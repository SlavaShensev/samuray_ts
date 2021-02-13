import React from 'react';
import { PostType} from '../../../redux/store';
import { UpdateNewPostTextType } from '../Profile';
import Post from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: UpdateNewPostTextType
}

const MyPosts = (props: MyPostsType) => {

    const postsElements = props.posts
        .map(p => <Post key={p.id} {...p}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    const onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : '----'
        props.updateNewPostText(text)
    }

    return (
        <div>
            My post
            <div>
                New posts
            </div>
            <textarea
                onChange={onPostChange}
                ref={newPostElement}
                value={props.newPostText}/>
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