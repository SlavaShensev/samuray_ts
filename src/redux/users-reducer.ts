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

export const dialogsReducer = (state: DialogsPageType = initialState,
                               action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
        default:
            return state
    }
}

type TypeAddMessage = ReturnType<typeof addMessageAC>
type TypeUpdateNewMessage = ReturnType<typeof updateNewMessageAC>
export type ActionsType = TypeAddMessage | TypeUpdateNewMessage

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const updateNewMessageAC = (newPost: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        newPostMessage: newPost,
    } as const
}