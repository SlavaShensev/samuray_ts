import {AppStateType} from "../../redux/redux-store";
import {
    followingInProgress,
    getUsersThunkCreator,
    setCurrentPage,
    UserType,
    followButton,
    unFollowButton
} from "../../redux/users-reducer"
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgressState: []
}

export type TypeMapDispatchToProps = {
    followingInProgress: (isFetching: boolean, id?: any) => void // need to fix todo
    getUsersThunkCreator: any// todo
    followButton: any // todo
    unFollowButton: any // todo
}
export type UsersContainerPropsType = MapStateToPropsType & TypeMapDispatchToProps
type UsersContainerStateType = {}

class UsersContainer extends React.Component<UsersContainerPropsType, UsersContainerStateType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                followButton={this.props.followButton}
                unFollowButton={this.props.unFollowButton}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                followingInProgressState={this.props.followingInProgressState}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgressState: state.usersPage.followingInProgress
    }
};
export default connect(mapStateToProps, {
    setCurrentPage,
    followingInProgress,
    getUsersThunkCreator,
    followButton,
    unFollowButton
})(UsersContainer)