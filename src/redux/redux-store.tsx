import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./dialogs-reduser";

const redusersBatch = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
})

let store = createStore(redusersBatch)

export type TypeStore = ReturnType< typeof redusersBatch>

export default store