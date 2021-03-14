import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const redusersBatch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

let store = createStore(redusersBatch)

export type AppStateType = ReturnType< typeof redusersBatch>

export default store