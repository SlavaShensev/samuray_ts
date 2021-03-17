export type UserType = {
    // id: number
    // photoUrl: string
    // fullName: string
    // followed: boolean
    // status: string
    // location: { city: string, country: string }
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
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2


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
                users: [...state.users, ...action.users]
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }
}

type TypeFollowAC = ReturnType<typeof followAC>
type TypeUnfollowAC = ReturnType<typeof unfollowAC>
type TypeSetUsersAC = ReturnType<typeof setUsersAC>
type TypeSetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
type ActionsType = TypeFollowAC | TypeUnfollowAC
    | TypeSetUsersAC | TypeSetCurrentPageAC

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}