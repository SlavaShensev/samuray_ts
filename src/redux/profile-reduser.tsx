import React from 'react';
import {DispatchActionsType, ProfilePageType} from "./store";

export const profileReduser = (profilePage: ProfilePageType, action: DispatchActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                message: action.newPostText
            }
            profilePage.posts.push(newPost)
            profilePage.newPostText = ''
            return profilePage
        case 'UPDATE-NEW-POST-TEXT':
            profilePage.newPostText = action.newText
            return profilePage
        default:
            return profilePage
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