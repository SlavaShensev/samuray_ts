import {AppStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC, UserType} from "../../redux/users-reducer"
import {Dispatch} from 'redux';
import {connect} from "react-redux";
import Users from "./Users";

export type MapDispatchToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
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

const mapStateToProps = (state: AppStateType): MapDispatchToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer