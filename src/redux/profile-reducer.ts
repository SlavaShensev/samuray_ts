type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Slava! Where are you go?'},
        {id: 3, message: 'Are you reading React?'},
    ],
    newPostText: '',
    profile: null
}

export type PostType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile?: any
}

export const profileReducer = (state: ProfilePageType = initialState,
                               action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                message: action.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText,
            }
        case 'SET_USERS_PROFILE':
            return {
                ...state,
                profile: action.profile

            }
        default:
            return state
    }
}
type TypeAddPost = ReturnType<typeof addPostAC>
type TypeUpdateNewText = ReturnType<typeof updateNewTextAC>
type TypeSetUserProfileAC = ReturnType<typeof setUserProfileAC>

type ProfileActionsType = TypeAddPost | TypeUpdateNewText
    | TypeSetUserProfileAC

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: postText
    } as const
}
export const updateNewTextAC = (newPost: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newPost
    } as const
}
export const setUserProfileAC = (profile: string) => {
    return {
        type: "SET_USERS_PROFILE",
        profile: profile
    } as const
}