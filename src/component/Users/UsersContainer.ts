import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer"
import { Dispatch } from 'redux';
import {connect} from "react-redux";
import Users from "./Users";

type MapDispatchToPropsType = {
    users: Array<UserType>
}

type TOwnPropsType = {
    users: UserType[]
}

export type TypeMapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number)=> void
    setUsers: (users: UserType[])=> void
}

const mapStateToProps = (state: AppStateType): MapDispatchToPropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
};

// export default connect<MapDispatchToPropsType, any, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users);

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer