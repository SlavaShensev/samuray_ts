import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer"
import { Dispatch } from 'redux';
import {connect} from "react-redux";


type MapDispatchToPropsType = {
    users: Array<UserType>
}


const mapStateToProps = (state: AppStateType): MapDispatchToPropsType => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch: Dispatch): any => {
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

export default connect<MapDispatchToPropsType, any, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users);