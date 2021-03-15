import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from './users.module.css'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

const Users = (props: UsersPropsType) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>unFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div>
                    {u.fullName}
                </div>
                <div>
                    {u.status}
                </div>
                <div>
                    {u.location.country}
                </div>
                <div>
                    {u.location.city}
                </div>
            </div>)
        }
    </div>
}

export default Users