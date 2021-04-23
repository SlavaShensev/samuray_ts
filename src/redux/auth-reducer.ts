import {usersAPI} from "../API/api";

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
/*
authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                console.log(id, login, email)
                console.log('ok')
                // @ts-ignore
                this.props.setAuthUserDataAC(id, email, login)
            }
        })
 */
