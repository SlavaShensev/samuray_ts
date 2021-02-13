import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPost, ProfilePageType} from "../../redux/store";

export type UpdateNewPostTextType = (newText: string) => void

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: AddPost
    updateNewPostText: UpdateNewPostTextType
    message: string

}

const Profile = (props:ProfilePropsType) => {
    const posts = props.profilePage.posts
    const addPost = props.addPost
    const newPostText = props.profilePage.newPostText
    const updateNewPostText = props.updateNewPostText
    return (
        <div>
            <ProfileInfo title={'Hello!'} />
            <MyPosts posts={posts}
                     addPost={addPost}
                     newPostText={newPostText}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    )
}


export default Profile;