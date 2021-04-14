import {AppStateType} from "../../redux/redux-store";
import {
    follow, followingInProgress, getUsersThunkCreator,
    setCurrentPage,
    unfollow,
    UserType
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
// type TOwnPropsType = {
//     users: UserType[]
// }
export type TypeMapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: (isFetching: boolean, id?: any) => void // need to fix todo
    getUsersThunkCreator: any// todo
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
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
    follow, unfollow,
    setCurrentPage,
    followingInProgress,
    getUsersThunkCreator
})(UsersContainer)