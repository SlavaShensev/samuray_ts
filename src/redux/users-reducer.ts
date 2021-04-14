import {usersAPI} from "../API/api";

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small: boolean,
        large: boolean
    },
    status: string,
    followed: boolean
}
export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any //todo
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducer = (state: InitialStateType = initialState,
                             action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followInProgress
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id: string) => id !== action.userID)
            }
        default:
            return state
    }
}

type TypeFollowAC = ReturnType<typeof followSuccess>
type TypeUnfollowAC = ReturnType<typeof unfollowSuccess>
type TypeSetUsersAC = ReturnType<typeof setUsers>
type TypeSetCurrentPageAC = ReturnType<typeof setCurrentPage>
type TypeSetUsersTotalCountAC = ReturnType<typeof setUsersTotalCount>
type TypeToggleIsFetchingAC = ReturnType<typeof toggleIsFetching>
type TypeFollowingInProgressAC = ReturnType<typeof followingInProgress>
type ActionsType = TypeFollowAC | TypeUnfollowAC
    | TypeSetUsersAC | TypeSetCurrentPageAC
    | TypeSetUsersTotalCountAC | TypeToggleIsFetchingAC
    | TypeFollowingInProgressAC
export const followSuccess = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const unfollowSuccess = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}
export const setUsersTotalCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}
export const followingInProgress = (followInProgress: boolean, userID?: string) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        followInProgress,
        userID
    } as const
} // todo--usererID ?

export const getUsersThunkCreator = (currentPage: any, pageSize: any) => (dispatch: any) => {
    dispatch(followingInProgress(true))
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(followingInProgress(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
        dispatch(toggleIsFetching(false))
    })
}

export const followButton = (userId: any) => (dispatch: any) => { //todo type userId dispatch
    dispatch(followingInProgress(true, userId))
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(followingInProgress(false, userId))
    })
}

export const unFollowButton = (userId: any) => (dispatch: any) => { //todo type userId dispatch
   dispatch(followingInProgress(true, userId))
    usersAPI.unFollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
       dispatch(followingInProgress(false, userId))
    })
}









