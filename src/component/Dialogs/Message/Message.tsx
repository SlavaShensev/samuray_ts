import React from "react";
import s from './../Dialogs.module.css'
import {messagesType} from "../Dialogs";

const Message = (props: messagesType) => {
    return (
        <div className={s.items}>
            {props.message}
        </div>
    )
}

export default Message;