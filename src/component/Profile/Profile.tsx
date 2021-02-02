import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
}

const Profile = (props:ProfilePropsType) => {
    const posts = props.profilePage.posts
    return (
        <div>
            <ProfileInfo title={'Hello!'} />
            <MyPosts posts={posts}/>
        </div>
    )
}


export default Profile;