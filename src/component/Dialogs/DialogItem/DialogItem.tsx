import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'
import {dialogItemType} from "../Dialogs";

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

export default DialogItem;