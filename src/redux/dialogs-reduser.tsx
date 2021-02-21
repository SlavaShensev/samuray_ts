import React from 'react';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
    likesCount: number
}

type InitialStateType = {
    dialog: DialogType[]
    messages: MessageType[]
    newMessage: string
}

type DialogsPageType = {
    dialog: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}

const initialState: InitialStateType = {
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
    newMessage: ''
}

export const dialogsReduser = (state: DialogsPageType = initialState,
                               action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const createMessage = {
                id: new Date().getTime(),
                message: state.newMessage,
                likesCount: 0,
            }
            return {
                ...state,
                messages: [...state.messages, createMessage]
            }
        case 'UPDATE-NEW-MESSAGE':
            return {
                ...state,
                newMessage: action.newPostMessage
            }
        default:
            return state
    }
}

type TypeAddMessage = ReturnType<typeof addMessageAC>
type TypeUpdateNewMessage = ReturnType<typeof updateNewMessageAC>
type ActionsType = TypeAddMessage | TypeUpdateNewMessage

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