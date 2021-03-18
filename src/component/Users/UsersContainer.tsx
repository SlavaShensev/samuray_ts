import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer"
import {Dispatch} from 'redux';
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import preloader from '../../assets/img/preloader.gif'

export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    ifFetching: boolean
}

type TOwnPropsType = {
    users: UserType[]
}

export type TypeMapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void

}

export type UsersContainerPropsType = MapStateToPropsType & TypeMapDispatchToProps

type StateType = {}

class UsersContainer extends React.Component<UsersContainerPropsType, StateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.ifFetching ? <img src={preloader} /> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                onPageChanged={this.onPageChanged}
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
        ifFetching: state.usersPage.isFetching,

    }
};

const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
};

// export default connect<MapDispatchToPropsType, any, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users);
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)