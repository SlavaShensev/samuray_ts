import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    addPost: (postText: string) => void
    updateNewText: (newPost: string) => void
    posts: any
    newPostText: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo title={'Hello!'}/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     updateNewText={props.updateNewText}
            />
        </div>
    )
}

export default Profile;