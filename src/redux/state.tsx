export type MessageType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialog: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Slava! Where are you go?'},
            {id: 3, message: 'Are you read React?'},
        ]
    },
    dialogsPage: {
        dialog: [
            {id: 1, name: 'Slava'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Elena'},
            {id: 4, name: 'Antony'},
            {id: 5, name: 'Tom'},
            {id: 6, name: 'Olya'},
            {id: 7, name: 'Sveta'},
        ],
        messages: [
            {
                id: 1,
                message: 'Hello, how are you?',
                likesCount: 13,
            },
            {
                id: 2,
                message: 'It is my first post',
                likesCount: 34,
            },
            {
                id: 3,
                message: 'It is my second post',
                likesCount: 23,
            },
        ],
    },
    sidebar: {

    }
}