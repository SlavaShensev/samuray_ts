import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/users-icon.png";
import styles from "./users.module.css";

type UserPropsType = {
    users: Array<any>
    totalUserCount: number
    pageSize: number
    currentPage: number
    unFollowButton: any
    followButton: any
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
                    {console.log(u)}
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
                                onClick={() => props.unFollowButton(u.id)}>unFollow</button>
                            : <button
                                disabled={props.followingInProgressState.some(id => id === u.id)}
                                onClick={() => props.followButton(u.id)}>Follow</button>}
                    </div>
                    <div>
                        <h3>
                            {`  User name ${u.name}`}
                        </h3>
                    </div>
                    <div>
                        <h3>
                            {`Follow for this user ${u.followed.toString()}`}
                        </h3>
                    </div>
                    <div>
                        <h3>
                            {`User ID ${u.id}`}
                        </h3>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users