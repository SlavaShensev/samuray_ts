import {addPostAC, updateNewTextAC} from "./profile-reduser";
import {addMessageAC, updateNewMessageAC} from "./dialogs-reduser";

export type MessageType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialog: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: DispatchActionsType) => void
}

export type DispatchActionsType = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageAC>

//  let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'Slava! Where are you go?'},
//                 {id: 3, message: 'Are you reading React?'},
//             ],
//             newPostText: ''
//
//         },
//         dialogsPage: {
//             dialog: [
//                 {id: 1, name: 'Slava'},
//                 {id: 2, name: 'Sasha'},
//                 {id: 3, name: 'Elena'},
//                 {id: 4, name: 'Antony'},
//                 {id: 5, name: 'Tom'},
//                 {id: 6, name: 'Olya'},
//                 {id: 7, name: 'Sveta'},
//             ],
//             messages: [
//                 {
//                     id: 1,
//                     message: 'Hello, how are you?',
//                     likesCount: 13,
//                 },
//                 {
//                     id: 2,
//                     message: 'It is my first post',
//                     likesCount: 34,
//                 },
//                 {
//                     id: 3,
//                     message: 'It is my second post',
//                     likesCount: 23,
//                 },
//             ],
//             newMessage: ''
//         },
//     },
//     _rerenderEntireTree() {
//         console.log('State changed')
//     },
//     subscribe(callback: () => void) {
//         this._rerenderEntireTree = callback
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReduser(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
//         this._rerenderEntireTree()
//     }
// }