type UserType = {
    id: number
    fullName: string
    followed: boolean
    status: string
    location: { city: string, country: string }
}

type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: [
        {
            id: 1,
            fullName: 'Slava',
            followed: false,
            status: ' I am a boss',
            location: {city: 'Odessa', country: 'Ukraine'},
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sasha',
            status: ' I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'},
        },
        {
            id: 3,
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
        default:
            return state
    }
}

type TypeFollowAC = ReturnType<typeof followAC>
type TypeUnfollowAC = ReturnType<typeof unfollowAC>
type ActionsType = TypeFollowAC | TypeUnfollowAC

const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}