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
        {
            id: 1,
            photoUrl: 'https://s.wsj.net/public/resources/images/BN-RQ780_WORKFA_GR_20170117101111.jpg',
            fullName: 'Slava',
            followed: false,
            status: ' I am a boss',
            location: {city: 'Odessa', country: 'Ukraine'},
        },
        {
            id: 2,
            photoUrl: 'https://s.wsj.net/public/resources/images/BN-RQ780_WORKFA_GR_20170117101111.jpg',
            followed: true,
            fullName: 'Sasha',
            status: ' I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'},
        },
        {
            id: 3,
            photoUrl: 'https://s.wsj.net/public/resources/images/BN-RQ780_WORKFA_GR_20170117101111.jpg',
            followed: false,
            fullName: 'Sergey',
            status: ' I am a big boss',
            location: {city: 'Moscow', country: 'Russia'},
        },
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