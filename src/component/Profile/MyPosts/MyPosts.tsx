import React from 'react';
import {DispatchActionsType, PostType} from '../../../redux/store';
import Post from "./Post/Post";
import {addPostAC, updateNewTextAC} from "../../../redux/profile-reduser";

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: DispatchActionsType) => void
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts
        .map(p => <Post key={p.id} {...p}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        props.dispatch(updateNewTextAC(props.newPostText))
    }

    const onPostChange = () => {
        const text = newPostElement.current ? newPostElement.current.value : '----'
        props.dispatch(updateNewTextAC(text))
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