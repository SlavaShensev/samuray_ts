import {connect} from "react-redux";
import React from "react";
import Profile from './Profile';
import {AppStateType} from "../../redux/redux-store";
import {addPostAC, PostType, setUserProfileAC, updateNewTextAC,} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../API/api";

type TypeMapStateToProps = {
    posts: Array<PostType>
    newPostText: string
    profile: any
}
// type TypeMapDispatchToProps = {
//     addPost: (postText: string) => void
//     updateNewText: (newPost: string) => void
//     setUsersProfile: (users: string) => void
// }
// type PropsType = TypeMapDispatchToProps & TypeMapStateToProps

interface IPropsType extends TypeMapStateToProps {
    addPostAC: (postText: string) => void
    updateNewTextAC: (newPost: string) => void
    setUserProfileAC: (users: string) => void
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
    }
}

class ProfileContainer extends React.Component <CommonProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '1'
        }
        usersAPI.getProfile(userId)
            .then(response => {
            this.props.setUserProfileAC(response.data)
        })
    }

    render() {
        return <>
            <Profile addPost={this.props.addPostAC}
                     updateNewText={this.props.updateNewTextAC}
                     posts={this.props.posts}
                     newPostText={this.props.newPostText}
                     profile={this.props.profile}/>
        </>
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
//     return {
//         addPost: (postText) => {
//             dispatch(addPostAC(postText))
//         },
//         updateNewText: (newPost) => {
//             dispatch(updateNewTextAC(newPost))
//         },
//         setUsersProfile: (users) => {
//             dispatch(setUserProfileAC(users))
//         }
//     }
// }

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

const connector = connect(mapStateToProps, {
    addPostAC,
    updateNewTextAC,
    setUserProfileAC
})

export default connector(WithUrlDataContainerComponent)
