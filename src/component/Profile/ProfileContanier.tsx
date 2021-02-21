import React from 'react';
import {connect} from "react-redux";
import Profile from './Profile';
import {TypeStore} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, updateNewTextAC} from "../../redux/profile-reduser";

type TypeMapStateToProps = {
    posts: any
    newPostText: any
}

type TypeMapDispatchToProps = {
    addPost: (postText: string) => void
    updateNewText: (newPost: string) => void
}


const mapStateToProps = (state: TypeStore): TypeMapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
    return {
        addPost: (postText) => {
            dispatch(addPostAC(postText))
        },
        updateNewText: (newPost) => {
            dispatch(updateNewTextAC(newPost))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer