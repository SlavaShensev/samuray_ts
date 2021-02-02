import React from "react";
import { MessageType } from "../../../redux/state";
import s from './../Dialogs.module.css'

const Message = (props: MessageType) => {
    return (
        <div className={s.items}>
            {props.message}
        </div>
    )
}

export default Message;