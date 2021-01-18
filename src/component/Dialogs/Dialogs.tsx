import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type dialogItemType = {
    id: string | number,
    name: string,
}

type message = {
    message: string
}

const DialogItem = (props: dialogItemType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={s.items + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props: message) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem id={1} name={'Slava'}/>
                <DialogItem id={2} name={'Sasha'}/>
                <DialogItem id={3} name={'Elena'}/>
                <DialogItem id={4} name={'Antony'}/>
                <DialogItem id={5} name={'Tom'}/>
                <DialogItem id={6} name={'Olya'}/>
                <DialogItem id={7} name={'Sveta'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello!'}/>
                <Message message={'Slava! Where are you go?'}/>
                <Message message={'Are you read React?'}/>
            </div>
        </div>
    )
}

export default Dialogs;