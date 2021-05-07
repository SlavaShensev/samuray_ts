import {authAPI, usersAPI} from "../API/api";
import {Dispatch} from "redux";
const SET_USER_DATA = 'SET_USER_DATA'
type InitialStateType = {
    userID: any
    email: any
    login: any
    isAuth: boolean
}
const initialState: InitialStateType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
}
export const authReducer = (state: InitialStateType = initialState,
                            action: ProfileActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
type TypeAddPost = ReturnType<typeof setAuthUserDataAC>
type ProfileActionsType = TypeAddPost

export const setAuthUserDataAC = (data: any) => {
    return {
        type: SET_USER_DATA,
        data
    } as const
}
export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setAuthUserDataAC(response.data))
        })
}
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const data = response.data.data
                dispatch(setAuthUserDataAC(data))
            }
        })
}

