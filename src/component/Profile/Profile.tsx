import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../index";

type ProfilePropsType = {
    profilePage: ProfilePageType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo title={'Hello!'} />
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;