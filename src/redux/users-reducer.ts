import {ActionsType, DialogsPageType, InitialStateType} from "./dialogs-reducer";

const initialState: InitialStateType = {
    dialog: [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Antony'},
        {id: 5, name: 'Tom'},
        {id: 6, name: 'Olya'},
        {id: 7, name: 'Sveta'},
    ],
    messages: [
        {
            id: 1,
            message: 'Hello, how are you?',
            likesCount: 13,
        },
        {
            id: 2,
            message: 'It is my first post',
            likesCount: 34,
        },
        {
            id: 3,
            message: 'It is my second post',
            likesCount: 23,
        },
    ],
    newMessage: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState,
                               action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':

        default:
            return state
    }
}