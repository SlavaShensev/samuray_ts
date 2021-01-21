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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>
                <DialogItem id={dialogsData[6].id} name={dialogsData[6].name}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    )
}

export default Dialogs;