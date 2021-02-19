import React from 'react';
import {DispatchActionsType, StoreType} from "./store";

export const dialogsReduser = (state: StoreType, action: DispatchActionsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const createMessage = {
                id: new Date().getTime(),
                message: action.newMessage,
                likesCount: 0,
            }
            state._state.dialogsPage.messages.push(createMessage)
            state._state.dialogsPage.newMessage = ''
            return state
        case 'UPDATE-NEW-MESSAGE':
            state._state.dialogsPage.newMessage = action.newPostMessage
            return state
    }
}

export const addMessageAC = (addMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMessage: addMessage
    } as const
}
export const updateNewMessageAC = (newPost: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        newPostMessage: newPost,
    } as const
}