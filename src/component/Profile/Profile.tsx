import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchActionsType, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: DispatchActionsType) => void
}

const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {
    return (
        <div>
            <ProfileInfo title={'Hello!'} />
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}
            />
        </div>
    )
}


export default Profile;