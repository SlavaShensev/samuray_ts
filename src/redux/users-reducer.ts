export type UserType = {
    id: number
    photoUrl: string
    fullName: string
    followed: boolean
    status: string
    location: { city: string, country: string }
}

export type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: [

    ],
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
                    ...state, users: [...state.users, ...action.users]
                }
        default:
            return state
    }
}

type TypeFollowAC = ReturnType<typeof followAC>
type TypeUnfollowAC = ReturnType<typeof unfollowAC>
type TypeSetUsersAC = ReturnType<typeof setUsersAC>
type ActionsType = TypeFollowAC | TypeUnfollowAC | TypeSetUsersAC

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