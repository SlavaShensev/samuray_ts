import {AppStateType} from "../../redux/redux-store";
import {
    follow, followingInProgress,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer"
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/api";

export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgressState: boolean
}

type TOwnPropsType = {
    users: UserType[]
}

export type TypeMapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
    followingInProgress: (isFetching: boolean) => void
    toggleIsFetching: (value: boolean) => void
}

export type UsersContainerPropsType = MapStateToPropsType & TypeMapDispatchToProps

type UsersContainerStateType = {}

class UsersContainer extends React.Component<UsersContainerPropsType, UsersContainerStateType> {
    componentDidMount() {
        this.props.followingInProgress(true)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.followingInProgress(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        this.props.followingInProgress(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.followingInProgress(false)
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
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
    follow, unfollow, setUsers,
    setCurrentPage, setUsersTotalCount, toggleIsFetching,
    followingInProgress
})(UsersContainer)