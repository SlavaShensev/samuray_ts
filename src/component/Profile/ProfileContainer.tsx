import {connect} from "react-redux";
import React from "react";
import Profile from './Profile';
import {AppStateType} from "../../redux/redux-store";
import {
    addPostAC,
    PostType,
    setUserProfileAC,
    updateNewTextAC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUserProfile,
    getStatus,
    updateStatus
} from "../../redux/profile-reducer";

type TypeMapStateToProps = {
    posts: Array<PostType>
    newPostText: string
    profile: any
    status: string
}

interface IPropsType extends TypeMapStateToProps {
    addPostAC: (postText: string) => void
    updateNewTextAC: (newPost: string) => void
    setUserProfileAC: (users: string) => void
    getUserProfile: any
    getStatus: any
    updateStatus: any
}

type PathParamsType = {
    userId: string
}
type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & IPropsType

const mapStateToProps = (state: AppStateType): TypeMapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

class ProfileContainer extends React.Component <CommonProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <>
            <Profile addPost={this.props.addPostAC}
                     updateNewText={this.props.updateNewTextAC}
                     posts={this.props.posts}
                     newPostText={this.props.newPostText}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        </>
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addPostAC,
        updateNewTextAC,
        setUserProfileAC,
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
