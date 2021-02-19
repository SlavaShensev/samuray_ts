import React from 'react';
import {DispatchActionsType, StoreType} from "./store";

export const profileReduser = (state: StoreType, action: DispatchActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                message: action.newPostText
            }
            state._state.profilePage.posts.push(newPost)
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state._state.profilePage.newPostText = action.newText
            return state
        default:
            return state
    }
}

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