import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../API/api";

type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
    status: string
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Slava! Where are you go?'},
        {id: 3, message: 'Are you reading React?'},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export type PostType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile?: any
    status: string
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
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
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
export type TypeAddPost = ReturnType<typeof addPostAC>
export type TypeUpdateNewText = ReturnType<typeof updateNewTextAC>
export type TypeSetUserProfileAC = ReturnType<typeof setUserProfileAC>
export type TypeSetStatusAC = ReturnType<typeof setStatusAC>
export type ProfileActionsType = TypeAddPost | TypeUpdateNewText
    | TypeSetUserProfileAC | TypeSetStatusAC

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
export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status: status
    } as const
}
export const setUserProfileAC = (profile: string) => {
    return {
        type: "SET_USERS_PROFILE",
        profile: profile
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch<TypeSetUserProfileAC>) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch<TypeSetStatusAC>) => {
    profileAPI.getStatus(userId)
        .then(response => {
            debugger
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch<TypeSetStatusAC>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}








