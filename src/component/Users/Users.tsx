import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/users-icon.png";
import styles from "./users.module.css";
import {usersAPI} from "../../API/api";

type UserPropsType = {
    users: Array<any>
    totalUserCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (p: number) => void
    followingInProgressState: []
    followingInProgress: (isFetching: boolean, id: string) => void
}

const Users = (props: UserPropsType) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((p, i) => {
                return (
                    <span key={i} onClick={(e) => {
                        props.onPageChanged(p)
                    }}
                          className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                )
            })}
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                disabled={props.followingInProgressState.some(id => id === u.id)}
                                onClick={() => {
                                    props.followingInProgress(true, u.id)
                                    usersAPI.unFollow(u.id).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.followingInProgress(false, u.id)
                                    })
                                }}>unFollow</button>
                            : <button
                                disabled={props.followingInProgressState.some(id => id === u.id)}
                                onClick={() => {
                                    props.followingInProgress(true, u.id)
                                    usersAPI.follow(u.id).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.followingInProgress(false, u.id)
                                    })
                                }}>Follow</button>}
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {'more info: ...'}
                    </div>
                    <div>
                        {'more info: ...'}
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users