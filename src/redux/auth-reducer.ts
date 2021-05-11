import {authAPI, usersAPI} from "../API/api";
import {Dispatch} from "redux";
import {setUserProfileAC, TypeSetUserProfileAC} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA'
type InitialStateType = {
    userID: string | null
    email: string | null
    login: string | null
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

export const getAuthUserData = () => (dispatch: Dispatch<TypeAddPost>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const data = response.data.data
                dispatch(setAuthUserDataAC(data))
            }
        })
}

