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
    followingInProgress: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,

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
            }
        default:
            return state
    }
}

type TypeFollowAC = ReturnType<typeof follow>
type TypeUnfollowAC = ReturnType<typeof unfollow>
type TypeSetUsersAC = ReturnType<typeof setUsers>
type TypeSetCurrentPageAC = ReturnType<typeof setCurrentPage>
type TypeSetUsersTotalCountAC = ReturnType<typeof setUsersTotalCount>
type TypeToggleIsFetchingAC = ReturnType<typeof toggleIsFetching>
type TypeFollowingInProgressAC = ReturnType<typeof followingInProgress>
type ActionsType = TypeFollowAC | TypeUnfollowAC
    | TypeSetUsersAC | TypeSetCurrentPageAC
    | TypeSetUsersTotalCountAC | TypeToggleIsFetchingAC | TypeFollowingInProgressAC

export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollow = (userID: number) => {
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

export const followingInProgress = (followInProgress: boolean) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        followInProgress
    } as const
}