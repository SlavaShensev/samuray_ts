import React from "react";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import Users from "./Users";

type UsersAIPComponentPropsType = {
    users: Array<any>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type StateType = {}

export default class UsersAIPComponent extends React.Component<UsersAIPComponentPropsType, StateType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        // https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        // https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      pageSize={this.props.pageSize}
                      totalUserCount={this.props.totalUserCount}
                      onPageChanged={this.onPageChanged}

        />
    }
}

