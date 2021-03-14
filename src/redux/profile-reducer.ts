type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Slava! Where are you go?'},
        {id: 3, message: 'Are you reading React?'},
    ],
    newPostText: ''
}

export type PostType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export const profileReducer = (state: ProfilePageType = initialState,
                               action: ActionsType): ProfilePageType => {
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
        default:
            return state
    }
}
type TypeAddPost = ReturnType<typeof addPostAC>
type TypeUpdateNewText = ReturnType<typeof updateNewTextAC>
type ActionsType = TypeAddPost | TypeUpdateNewText

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