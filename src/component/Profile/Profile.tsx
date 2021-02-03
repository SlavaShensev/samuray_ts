import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPost, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: AddPost
}

const Profile = (props:ProfilePropsType) => {
    const posts = props.profilePage.posts
    const addPost = props.addPost
    return (
        <div>
            <ProfileInfo title={'Hello!'} />
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    )
}


export default Profile;