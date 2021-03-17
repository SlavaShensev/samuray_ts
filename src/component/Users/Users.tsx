import React from "react";
import userPhoto from "../../assets/img/user.jpg";
import styles from "./users.module.css";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<any>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
}

type StateType = {}

export default class Users extends React.Component<UsersPropsType, StateType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        // https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pagesCount = this.props.totalUserCount / this.props.pageSize
        const pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            {pages.map(p => {
                return (
                    <span
                        onClick={() => {
                            return this.props.setCurrentPage(p)
                        }}
                        className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                )
            })}
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>unFollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {'u.location.country'}
                    </div>
                    <div>
                        {'u.location.city'}
                    </div>
                </div>)
            }
        </div>
    }
}