import {connect} from "react-redux";
import React from "react";
import Profile from './Profile';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, PostType, updateNewTextAC} from "../../redux/profile-reducer";

type OwnProps = {}

type TypeMapStateToProps = {
    posts: Array<PostType>
    newPostText: string
}

type TypeMapDispatchToProps = {
    addPost: (postText: string) => void
    updateNewText: (newPost: string) => void
}

class ProfileContainer extends React.Component {
    render() {
        return <>
            <Profile addPost={this.props.addPost}
                     updateNewText={}
                     posts={}
                     newPostText={}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): TypeMapStateToProps => {
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

export default connect<TypeMapStateToProps, TypeMapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps)(ProfileContainer)
