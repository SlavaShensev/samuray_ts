import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchActionsType, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: DispatchActionsType) => void
}

const Profile = (props:ProfilePropsType) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo title={'Hello!'} />
            <MyPosts posts={props}
                     newPostText={newPostText}
            />
        </div>
    )
}


export default Profile;