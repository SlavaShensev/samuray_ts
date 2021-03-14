import {connect} from "react-redux";
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

const ProfileContainer = connect<TypeMapStateToProps, TypeMapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer