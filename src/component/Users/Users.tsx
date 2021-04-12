import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/users-icon.png";
import styles from "./users.module.css";
import axios from "axios";

type UserPropsType = {
    users: Array<any>
    totalUserCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (p: number) => void
    followingInProgressState: boolean
    followingInProgress: (isFetching: boolean)=>void
}

const Users = (props: UserPropsType) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return (
                    <span
                        onClick={(e) => {
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
                                disabled={props.followingInProgressState}
                                onClick={() => {
                                    props.followingInProgress(true)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'bc0f37c0-3636-40b7-850e-bf294ab46dea'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.followingInProgress(false)
                                        })

                                }}>unFollow</button>
                            : <button onClick={() => {
                                props.followingInProgress(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'bc0f37c0-3636-40b7-850e-bf294ab46dea'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.followingInProgress(false)
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
                        {'u.location.country'}
                    </div>
                    <div>
                        {'u.location.city'}
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users