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


export const setAuthUserDataAC = (userID: any, email: any, login: any) => {
    return {
        type: SET_USER_DATA,
        data: {userID, email, login}
    } as const
}
