import {connect} from "react-redux";
import React from "react";
import Profile from './Profile';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, PostType, setUserProfileAC, updateNewTextAC} from "../../redux/profile-reducer";
import axios from "axios";
import {RouteComponentProps, withRouter } from "react-router-dom";

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

type PropsType = TypeMapDispatchToProps & TypeMapStateToProps

type PathParamsType = {
    userID: string
}

type ComonProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

type ProfileContainerStateType = {}

class ProfileContainer extends React.Component <ComonProfileContainerPropsType> {
    componentDidMount(): void {
        debugger
        let userId = this.props.match.params.userID
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

    const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<TypeMapStateToProps, TypeMapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)
