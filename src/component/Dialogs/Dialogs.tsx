import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type dialogItemType = {
    id: number,
    name: string,
}
type messagesType = {
    id: number
    message: string
}

const DialogItem = (props: dialogItemType) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.items + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props: messagesType) => {
    return (
        <div>
            {props.message}
        </div>
    )
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