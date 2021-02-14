import React from 'react';
import {DispatchActionsType, PostType} from '../../../redux/store';
import Post from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: DispatchActionsType) => void
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts
        .map(p => <Post key={p.id} {...p}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch({type:"ADD-POST", newPostText: props.newPostText})
        props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText: ''})
    }

    const onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : '----'
        props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText: text})
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