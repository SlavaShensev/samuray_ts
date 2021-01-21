import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

export type dialogItemType = {
    id: number,
    name: string,
}
export type messagesType = {
    id: number
    message: string
}

const Dialogs = () => {
    const dialogsData: Array<dialogItemType> = [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Antony'},
        {id: 5, name: 'Tom'},
        {id: 6, name: 'Olya'},
        {id: 7, name: 'Sveta'},
    ]
    const messagesData: Array<messagesType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Slava! Where are you go?'},
        {id: 3, message: 'Are you read React?'},
    ]
    const dialogsItem = dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesItem = messagesData
        .map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
        </div>
    )
}

export default Dialogs;