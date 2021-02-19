import React from 'react';
import {DialogsPageType, DispatchActionsType} from "./store";

export const dialogsReduser = (dialogsPage: DialogsPageType, action: DispatchActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const createMessage = {
                id: new Date().getTime(),
                message: action.newMessage,
                likesCount: 0,
            }
            dialogsPage.messages.push(createMessage);
            dialogsPage.newMessage = ''
            return dialogsPage
        case 'UPDATE-NEW-MESSAGE':
            dialogsPage.newMessage = action.newPostMessage
            return dialogsPage
        default:
            return dialogsPage
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