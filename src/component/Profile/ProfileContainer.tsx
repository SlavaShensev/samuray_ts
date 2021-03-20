import {connect} from "react-redux";
import React from "react";
import Profile from './Profile';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, PostType, setUserProfileAC, updateNewTextAC} from "../../redux/profile-reducer";
import axios from "axios";

type OwnProps = {}

type TypeMapStateToProps = {
    posts: Array<PostType>
    newPostText: string
    profile: any

}

type TypeMapDispatchToProps = {
    addPost: (postText: string) => void
    updateNewText: (newPost: string) => void
    setUsersProfile: (users: string) => void

}

type ProfileContainerPropsType = TypeMapDispatchToProps & TypeMapStateToProps

type ProfileContainerStateType = {}

class ProfileContainer extends React.Component <ProfileContainerPropsType, ProfileContainerStateType> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }
    render() {
        return <>
            <Profile addPost={this.props.addPost}
                     updateNewText={this.props.updateNewText}
                     posts={this.props.posts}
                     newPostText={this.props.newPostText}
                     profile={this.props.profile}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): TypeMapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
    return {
        addPost: (postText) => {
            dispatch(addPostAC(postText))
        },
        updateNewText: (newPost) => {
            dispatch(updateNewTextAC(newPost))
        },
        setUsersProfile: (users) => {
            dispatch(setUserProfileAC(users))
        }
    }
}

export default connect<TypeMapStateToProps, TypeMapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps)(ProfileContainer)
