import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

const redusersBatch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(redusersBatch)

// @ts-ignore
window.store = store

export type AppStateType = ReturnType< typeof redusersBatch>

export default store